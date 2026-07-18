import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { API_BASE } from "../config/api";
import { COURSES } from "../constants/courses";

export default function MeetingManagement() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    course: "",
    sessionName: "",
    meetLink: "",
    message: "",
  });
  const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleUnauthorized = () => {
    logout();
    navigate("/admin-login", { replace: true });
  };

  // Load registered students whenever a course is selected
  useEffect(() => {
    if (!form.course) {
      setStudents([]);
      return;
    }
    let cancelled = false;
    setLoadingStudents(true);
    fetch(`${API_BASE}/api/students?course=${encodeURIComponent(form.course)}`, {
      headers: authHeaders,
    })
      .then(async (res) => {
        if (res.status === 401) return handleUnauthorized();
        const data = await res.json();
        if (!cancelled) setStudents(Array.isArray(data) ? data : []);
      })
      .catch(() => !cancelled && setStudents([]))
      .finally(() => !cancelled && setLoadingStudents(false));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!/^https:\/\/meet\.google\.com\//.test(form.meetLink)) {
      setError("Please paste a valid Google Meet link (https://meet.google.com/...)");
      return;
    }
    if (students.length === 0) {
      setError("No registered students for this course.");
      return;
    }
    if (!window.confirm(`Send this Meet link to ${students.length} student(s)?`)) {
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`${API_BASE}/api/meetings/send`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify(form),
      });
      if (res.status === 401) return handleUnauthorized();
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setResult(data);
      setForm({ course: form.course, sessionName: "", meetLink: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-blue-600">
            Meeting Management
          </h1>
          <button
            onClick={() => {
              logout();
              navigate("/admin-login");
            }}
            className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md transition"
          >
            Logout
          </button>
        </div>

        <form
          onSubmit={handleSend}
          className="bg-white shadow-md rounded-lg p-8"
        >
          {/* Course */}
          <div>
            <label className="block text-gray-700">Course</label>
            <select
              name="course"
              required
              value={form.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Course</option>
              {COURSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {form.course && (
              <p className="text-sm text-gray-500 mt-1">
                {loadingStudents
                  ? "Loading students..."
                  : `${students.length} registered student(s) in this course`}
              </p>
            )}
          </div>

          {/* Session Name */}
          <div className="mt-4">
            <label className="block text-gray-700">Session Name</label>
            <input
              type="text"
              name="sessionName"
              required
              value={form.sessionName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Tajweed Class - Lesson 5"
            />
          </div>

          {/* Meet Link */}
          <div className="mt-4">
            <label className="block text-gray-700">Google Meet Link</label>
            <input
              type="url"
              name="meetLink"
              required
              value={form.meetLink}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://meet.google.com/xxx-xxxx-xxx"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="block text-gray-700">Message (optional)</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Class starts at 8:15 PM after Isha. Please join 5 minutes early."
            ></textarea>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-sm">
              Sent to {result.sent} of {result.total} student(s).
              {result.failed > 0 && (
                <span className="text-red-700"> {result.failed} failed — check delivery log below.</span>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={sending || !form.course}
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send to Students"}
          </button>
        </form>

        {/* Delivery log */}
        {result?.deliveryLog?.length > 0 && (
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="font-semibold text-gray-700 mb-3">Delivery Log</h2>
            <ul className="text-sm divide-y">
              {result.deliveryLog.map((d) => (
                <li key={d.email} className="py-2 flex justify-between">
                  <span>{d.email}</span>
                  <span
                    className={
                      d.status === "sent" ? "text-green-600" : "text-red-600"
                    }
                  >
                    {d.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Student list for selected course */}
        {form.course && students.length > 0 && (
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="font-semibold text-gray-700 mb-3">
              Registered Students — {form.course}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b text-gray-500">
                    <th className="py-2">Name</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">WhatsApp</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s._id} className="border-b last:border-0">
                      <td className="py-2">{s.fullName}</td>
                      <td className="py-2">{s.email}</td>
                      <td className="py-2">{s.whatsapp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
