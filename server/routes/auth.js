import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// POST /api/auth/login  { email, password }
router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;
  if (
    email.toLowerCase() !== String(validEmail).toLowerCase() ||
    password !== validPassword
  ) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });
  res.json({ token });
});

export default router;
