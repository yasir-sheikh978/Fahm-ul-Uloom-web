import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    whatsapp: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    country: { type: String, trim: true },
    city: { type: String, trim: true },
    course: { type: String, required: true, trim: true },
    mode: { type: String, enum: ["online", "onsite"], default: "online" },
  },
  { timestamps: true }
);

// One registration per email per course
studentSchema.index({ email: 1, course: 1 }, { unique: true });

export default mongoose.model("Student", studentSchema);
