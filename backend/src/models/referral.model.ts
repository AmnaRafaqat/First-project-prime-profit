import mongoose from "mongoose";

const ReferralSchema = new mongoose.Schema({
  user: { type: String, required: true, index: true },
  referredUser: { type: String, required: true },
  commission: { type: Number, required: true },
  createdAt: { type: Number, required: true, default: () => Date.now() },
});

export type ReferralDocument = mongoose.InferSchemaType<typeof ReferralSchema> & { _id: mongoose.Types.ObjectId };

export const ReferralModel = mongoose.model("Referral", ReferralSchema);