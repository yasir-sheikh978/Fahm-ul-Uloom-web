import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });
  }
  return transporter;
}

export async function sendMeetingEmail({ to, name, sessionName, course, meetLink, message }) {
  // The email button opens the website home page, which shows a popup
  // with the session details and the real "Join Google Meet" button.
  const siteUrl = process.env.SITE_URL || "http://localhost:5173";
  const inviteUrl =
    `${siteUrl}/?join=1` +
    `&session=${encodeURIComponent(sessionName)}` +
    `&course=${encodeURIComponent(course)}` +
    `&meet=${encodeURIComponent(meetLink)}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
      <div style="background: #1d4ed8; color: #fff; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">Fahm-ul-Uloom</h2>
        <p style="margin: 5px 0 0;">Online Class Invitation</p>
      </div>
      <div style="padding: 24px;">
        <p>Assalamu Alaikum <strong>${name}</strong>,</p>
        <p>You are invited to the following online session:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr><td style="padding: 6px 0;"><strong>Session:</strong></td><td>${sessionName}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Course:</strong></td><td>${course}</td></tr>
        </table>
        ${message ? `<p style="background:#f3f4f6; padding:12px; border-radius:6px;">${message}</p>` : ""}
        <div style="text-align: center; margin: 24px 0;">
          <a href="${inviteUrl}" style="background: #16a34a; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            Join Your Class
          </a>
        </div>
        <p style="color: #6b7280; font-size: 13px;">If the button does not work, copy this link into your browser:<br/>
        <a href="${inviteUrl}">${inviteUrl}</a></p>
      </div>
      <div style="background: #f9fafb; padding: 14px; text-align: center; color: #9ca3af; font-size: 12px;">
        Fahm-ul-Uloom — Online Islamic Education
      </div>
    </div>`;

  await getTransporter().sendMail({
    from: `"Fahm-ul-Uloom" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Online Class: ${sessionName} (${course})`,
    html,
  });
}
