import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nickname: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    picture: {
      type: String,
    },
    user_type: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
