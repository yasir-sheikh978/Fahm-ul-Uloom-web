import { Router } from "express";
import Student from "../models/Student.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

// POST /api/students — public, called by the registration form
router.post("/", async (req, res) => {
  try {
    const { fullName, email, whatsapp, phone, country, city, course, mode } =
      req.body || {};
    if (!fullName || !email || !whatsapp || !course) {
      return res
        .status(400)
        .json({ error: "fullName, email, whatsapp and course are required" });
    }
    const student = await Student.findOneAndUpdate(
      { email: email.toLowerCase(), course },
      { fullName, email, whatsapp, phone, country, city, course, mode },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(201).json({ id: student._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save student" });
  }
});

// GET /api/students?course=... — admin only
router.get("/", requireAdmin, async (req, res) => {
  try {
    const filter = req.query.course ? { course: req.query.course } : {};
    const students = await Student.find(filter)
      .sort({ createdAt: -1 })
      .select("fullName email whatsapp course createdAt");
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// DELETE /api/students/:id — admin only
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete student" });
  }
});

export default router;
