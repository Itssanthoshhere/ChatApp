import express from "express";
import Conversation from "../models/Conversation.js";
import mongoose from "mongoose";

const router = express.Router();

// GET All Conversation for a user
// /conversations/:userId
router.get("/:userId", async (req, res) => {
  try {
    let conversations = await Conversation.find({
      participants: req.params.userId,
    })
      .populate("participants")
      .populate("lastMessage")
      .sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
