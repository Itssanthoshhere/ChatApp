import Conversation from "./models/Conversation.js";
import Message from "./models/Message.js";

export default function registerSocketHandlers(io) {
  console.log("Socket Handlers initialized");

  io.on("connection", (socket) => {
    const userId =
      socket.handshake.auth.userId || socket.handshake.query.userId;

    console.log("Socket connected:", socket.id);

    // Join personal room
    if (userId) {
      socket.join(userId);
      console.log(`User ${userId} joined their personal room`);
    }

    // Join another user's room for chat
    socket.on("join", (otherUserId) => {
      socket.join(otherUserId);
      console.log(`User ${userId} joined a chat with ${otherUserId}`);
    });

    socket.on("send-message", async (data) => {
      const { otherUserId, text } = data;

      try {
        // Find or create conversation
        let conversation = await Conversation.findOne({
          participants: { $all: [userId, otherUserId] },
        }).populate("participants");

        let isNew = false;

        if (!conversation) {
          isNew = true;
          conversation = new Conversation({
            participants: [userId, otherUserId],
          });

          await conversation.populate("participants");
        }
        // save Message
        const message = new Message({
          conversationId: conversation._id,
          senderId: userId,
          text,
        });

        await message.save();

        // Update Unread Count
        const currentUnread =
          conversation.unreadCounts.get(otherUserId.toString()) || 0;
        conversation.unreadCounts.set(
          otherUserId.toString(),
          currentUnread + 1
        );

        // Update Last Activity
        conversation.lastMessage = message;

        await conversation.save();
        socket.to(otherUserId).emit("receive-message", {
          message,
          conversation,
          isNew,
        });
      } catch (error) {
        console.log("Send Message", error);
      }
    });
    
    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });

    socket.on("focus-conversation", async (conversationId) => {
      try {
        const conversation = await Conversation.findById(conversationId);
        if (!conversation) {
          return;
        }
        conversation.unreadCounts.set(userId, 0);
        await conversation.save();
      } catch (error) {
        console.log("Focus conversation error", error);
      }
    });
  });
}
