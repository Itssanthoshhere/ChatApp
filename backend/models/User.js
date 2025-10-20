import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  phone: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number']
  },
  name: { type: String },
  profileImage: { type: String },
}, {
  timestamps: true
});

export default mongoose.model("User", UserSchema);
