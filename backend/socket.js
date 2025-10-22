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

        await conversation.save();
        socket.to(otherUserId).emit("receive-message", {
          text,
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
  });
}
