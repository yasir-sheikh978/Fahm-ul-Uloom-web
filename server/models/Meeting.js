import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    course: { type: String, required: true },
    sessionName: { type: String, required: true },
    meetLink: { type: String, required: true },
    message: { type: String, default: "" },
    recipientCount: { type: Number, default: 0 },
    deliveryLog: [
      {
        email: String,
        status: { type: String, enum: ["sent", "failed"] },
        error: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Meeting", meetingSchema);
