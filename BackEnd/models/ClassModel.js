import mongoose from "mongoose";

const classSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    join_url: {
      type: String,
      required: true,
    },
    start_url: {
      type: String,
      required: true,
    },
    meeting_id: {
      type: String,
      required: true,
    },
    meeting_password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Class", classSchema);

export default Class;
