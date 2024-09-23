import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: {
    type: String,  // Clerk user ID
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  photo: {
    type: String,  // URL of the user's profile picture
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  stores: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Store',  // Reference to the Store model
    },
  ],
});

const User = models?.User || model("User", userSchema);
export default User