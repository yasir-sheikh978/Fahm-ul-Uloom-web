import { Router } from "express";
import Student from "../models/Student.js";
import Meeting from "../models/Meeting.js";
import { requireAdmin } from "../middleware/auth.js";
import { sendMeetingEmail, buildInviteUrl } from "../mailer.js";

const router = Router();

// POST /api/meetings/send — admin only
// { course, sessionName, meetLink, message }
router.post("/send", requireAdmin, async (req, res) => {
  try {
    const { course, sessionName, meetLink, message } = req.body || {};
    if (!course || !sessionName || !meetLink) {
      return res
        .status(400)
        .json({ error: "course, sessionName and meetLink are required" });
    }
    if (!/^https:\/\/meet\.google\.com\//.test(meetLink)) {
      return res
        .status(400)
        .json({ error: "meetLink must be a valid Google Meet link (https://meet.google.com/...)" });
    }

    const students = await Student.find({ course }).select("fullName email");
    if (students.length === 0) {
      return res
        .status(404)
        .json({ error: "No registered students found for this course" });
    }

    const deliveryLog = [];
    for (const student of students) {
      try {
        await sendMeetingEmail({
          to: student.email,
          name: student.fullName,
          sessionName,
          course,
          meetLink,
          message,
        });
        deliveryLog.push({ email: student.email, status: "sent" });
      } catch (err) {
        console.error(`Failed to email ${student.email}:`, err.message);
        deliveryLog.push({ email: student.email, status: "failed", error: err.message });
      }
    }

    const meeting = await Meeting.create({
      course,
      sessionName,
      meetLink,
      message,
      recipientCount: students.length,
      deliveryLog,
    });

    const sent = deliveryLog.filter((d) => d.status === "sent").length;
    res.json({
      id: meeting._id,
      total: students.length,
      sent,
      failed: students.length - sent,
      inviteUrl: buildInviteUrl({ sessionName, course, meetLink }),
      deliveryLog,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send meeting invitations" });
  }
});

// GET /api/meetings — admin only, history of sent meetings
router.get("/", requireAdmin, async (req, res) => {
  try {
    const meetings = await Meeting.find()
      .sort({ createdAt: -1 })
      .limit(50)
      .select("course sessionName meetLink recipientCount createdAt");
    res.json(meetings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch meetings" });
  }
});

export default router;
