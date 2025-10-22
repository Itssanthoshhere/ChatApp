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

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
}
