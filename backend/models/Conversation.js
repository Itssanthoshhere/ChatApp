import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        validate: [arr => arr.length === 2, "A conversation must have 2 participants"]
    },
});

export default mongoose.model("Conversation", conversationSchema);
