import express from "express";
import User from "../models/User.js";
import multer from "multer";

const router = express.Router();

// Set Mutler for Image Uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Get User by Phone API -> GET api/users/:phone
router.get("/:phone", async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.params.phone });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create User with Image Upload API -> POST api/users
router.post("/", upload.single("profileImage"), async (req, res) => {
  const { phone, name } = req.body;

  try {
    let user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const profileImage = req.file ? `/uploads/${req.file.filename}` : null;

    user = new User({ phone, name, profileImage });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
