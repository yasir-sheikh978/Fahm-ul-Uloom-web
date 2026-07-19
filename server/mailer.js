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

// Registration auto-reply to the student + admission details to the admin.
// Merged from the old standalone email server (email-tem-one).
export async function sendRegistrationEmails({
  email,
  firstName,
  lastName,
  whatsapp,
  phone,
  country,
  city,
  address,
  sessionType,
  education,
  mode,
  Environment,
}) {
  const transporter = getTransporter();

  // Auto-reply to the student
  await transporter.sendMail({
    from: `"Fahm-ul-Uloom" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "You Received A Message From Fahmululoom!",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; line-height: 1.6;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background-color: #007bff; color: #ffffff; padding: 15px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h2>
            <p style="margin: 5px 0;">Jamia Fahm-ul-uloom</p>
            <p style="font-size: 14px;">Education At Your Doorstep</p>
          </div>
          <div style="padding: 20px; color: #333;">
            <p>Dear ${firstName},</p>
            <p>Thank you for contacting us! We’ve received your details.</p>
            <p>You are now registered for the course: <strong>'${sessionType}'</strong>.</p>
            <p>Our team will contact you soon to provide information about the fees and timings.</p>
            <p>If you have further questions, please don’t hesitate to reach out to us:</p>
            <p style="font-size: 16px; font-weight: bold; color: #007bff;">+92 300 9214180</p>
            <p>Best regards,</p>
            <p>Jamia Fahm-ul-uloom</p>
          </div>
          <div style="background-color: #f0f0f0; padding: 10px 20px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #555;">© 2025 Jamia Fahm-ul-uloom. All rights reserved.</p>
          </div>
        </div>
      </div>`,
  });

  // Admission details to the admin inbox
  const row = (label, value) => `
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #555;"><strong>${label}:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${value || "-"}</td>
              </tr>`;

  await transporter.sendMail({
    from: `"Fahm-ul-Uloom" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Admission Form Submission",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; line-height: 1.6;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background-color: #007bff; color: #ffffff; padding: 15px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <h2 style="margin: 0; font-size: 20px;">New Admission Form Submission</h2>
          </div>
          <div style="padding: 20px; color: #333;">
            <table style="width: 100%; border-collapse: collapse;">
              ${row("Name", `${firstName} ${lastName}`)}
              ${row("Email", email)}
              ${row("WhatsApp Number", whatsapp)}
              ${row("Phone Number", phone)}
              ${row("Course", sessionType)}
              ${row("Country, City", `${country}, ${city}`)}
              ${row("Address", address)}
              ${row("Education", education)}
              ${row("Mode", mode)}
              ${row("Environment", Environment)}
            </table>
          </div>
          <div style="background-color: #f0f0f0; padding: 10px 20px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #555;">© 2025 Jamia Fahm-ul-uloom. All rights reserved.</p>
          </div>
        </div>
      </div>`,
  });
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
