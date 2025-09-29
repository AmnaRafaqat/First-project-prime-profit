import mongoose from "mongoose";

const WithdrawalSchema = new mongoose.Schema({
  user: { type: String, required: true, index: true },
  amount: { type: Number, required: true },
  planId: { type: String },
  status: { type: String, enum: ["requested", "approved", "rejected"], default: "requested" },
  createdAt: { type: Number, required: true, default: () => Date.now() },
});

export type WithdrawalDocument = mongoose.InferSchemaType<typeof WithdrawalSchema> & { _id: mongoose.Types.ObjectId };

export const WithdrawalModel = mongoose.model("Withdrawal", WithdrawalSchema);


