import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { Server } from "socket.io";

import userRoutes from "./routes/userRoutes.js";
import registerSocketHandlers from "./socket.js";

dotenv.config();

const app = express();
const port = 5001; // Safe port, avoids macOS system conflicts

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

// Basic route
app.get("/", (req, res) => res.send("Hello"));

// API routes
app.use("/api/users", userRoutes);

// Start server
const server = app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);

// Initialize Socket.IO
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

// Register socket event handlers
registerSocketHandlers(io);

// Export io to use in other modules
export { io };
