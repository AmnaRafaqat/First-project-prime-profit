import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  walletAddress: { type: String },
  notificationEmail: { type: String },
  language: { type: String },
});

export type SettingDocument = mongoose.InferSchemaType<typeof SettingSchema> & { _id: mongoose.Types.ObjectId };

export const SettingModel = mongoose.model("Setting", SettingSchema);


