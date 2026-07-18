import mongoose from "mongoose";

let cached = null;

export async function connectDB() {
  if (cached) return cached;
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }
  cached = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || "fahm_ul_uloom",
  });
  console.log("MongoDB connected");
  return cached;
}
