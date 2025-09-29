import mongoose from "mongoose";

const InvestmentSchema = new mongoose.Schema({
  user: { type: String, required: true, index: true },
  amount: { type: Number, required: true },
  planId: { type: String, required: true },
  createdAt: { type: Number, required: true, default: () => Date.now() },
});

export type InvestmentDocument = mongoose.InferSchemaType<typeof InvestmentSchema> & { _id: mongoose.Types.ObjectId };

export const InvestmentModel = mongoose.model("Investment", InvestmentSchema);