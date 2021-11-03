import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
    },
    teachers_name: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
