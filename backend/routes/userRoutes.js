import express from "express";
import User from "../models/User.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const router = express.Router();

// Setup Mutler for Image Uploads
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
    console.log(user);

    // Profile Image relative image to full url conversion
    const profileImageUrl =
      user && user.profileImage
        ? `${req.protocol}://${req.get("host")}${user.profileImage}`
        : null;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      _id: user._id,
      phone: user.phone,
      name: user.name,
      profileImage: profileImageUrl,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
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

// Update Profile API -> PUT /api/users/:id
router.put("/:id", upload.single("profileImage"), async (req, res) => {
  const { name } = req.body;

  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.file) {
      if (user.profileImage) {
        // remove old image
        const oldImagePath = path.join(process.cwd(), user.profileImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      user.profileImage = `/uploads/${req.file.filename}`;
    }

    // Update name if provided
    if (name) {
      user.name = name;
    }
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
