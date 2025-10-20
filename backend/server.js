import express from "express";

const app = express();
const port = 5001; // Safe port, avoids macOS system conflicts

app.use(express.json()); // Middleware to parse JSON requests

// Basic GET route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start server
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
