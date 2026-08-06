import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/students.js";
import meetingRoutes from "./routes/meetings.js";
import { sendRegistrationEmails, sendDonationIntentEmail } from "./mailer.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));
app.use(express.json());

// Ensure DB is connected before handling any request (works on Vercel serverless too)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection failed:", err.message);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.get("/", (req, res) => res.json({ status: "Fahm-ul-Uloom API running" }));

// Registration emails (auto-reply + admin notification).
// Same contract as the old standalone email server, now merged here.
app.post("/email", async (req, res) => {
  try {
    const { email, firstName, sessionType } = req.body || {};
    if (!email || !firstName || !sessionType) {
      return res
        .status(400)
        .json({ success: false, message: "email, firstName and sessionType are required" });
    }
    await sendRegistrationEmails(req.body);
    res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ success: false, message: "Failed to send emails." });
  }
});

// Donation intent notification — no payment gateway is wired up yet, this
// just emails the admin so they can follow up while the donor transfers
// manually via Easypaisa/Bank (shown on the donation page).
app.post("/api/donations/intent", async (req, res) => {
  try {
    const { name, lastname, email, address, amount } = req.body || {};
    if (!name || !email || !amount) {
      return res
        .status(400)
        .json({ success: false, message: "name, email and amount are required" });
    }
    await sendDonationIntentEmail({ name, lastname, email, address, amount });
    res.status(200).json({ success: true, message: "Donation intent received!" });
  } catch (error) {
    console.error("Error sending donation intent email:", error);
    res.status(500).json({ success: false, message: "Failed to send notification." });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/meetings", meetingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));

export default app;
