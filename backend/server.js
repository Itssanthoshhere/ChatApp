import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = 5001; // Safe port, avoids macOS system conflicts

app.use(express.json()); // Middleware to parse JSON requests

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

// Basic GET route
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/users", userRoutes);

// Start server
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
