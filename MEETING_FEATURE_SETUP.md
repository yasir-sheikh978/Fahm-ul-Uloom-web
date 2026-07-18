# Meeting Management Feature — Setup Guide

Admin opens `/admin-login`, logs in, then uses `/meeting-management` to pick a
course, paste a Google Meet link, and email it to every student registered for
that course. Students are saved to MongoDB automatically when they submit the
registration form.

## Architecture

```
React site (this repo, Vite)
   │  fetch()
   ▼
server/  — Express API (deploy on Vercel, same as your email service)
   │            │
   ▼            ▼
MongoDB Atlas   Gmail SMTP (Nodemailer)
(students,      (sends the Meet-link
 meetings)       invitation emails)
```

## MongoDB collections

- **students** — fullName, email, whatsapp, phone, country, city, course, mode, createdAt.
  Unique per (email + course), so re-registering just updates the record.
- **meetings** — course, sessionName, meetLink, message, recipientCount, deliveryLog[], createdAt.
  Every send is logged with per-student sent/failed status.

## API endpoints

| Method | Path | Auth | Purpose |
|---|---|---|---|
| POST | `/api/auth/login` | public | Admin login → returns JWT (12h expiry) |
| POST | `/api/students` | public | Save student (called by registration form) |
| GET | `/api/students?course=X` | admin | List students of a course |
| POST | `/api/meetings/send` | admin | Email Meet link to all students of a course |
| GET | `/api/meetings` | admin | History of sent meetings |

## One-time setup

### 1. MongoDB Atlas (free)
1. Create a free cluster at https://cloud.mongodb.com
2. Database Access → create a user with password.
3. Network Access → allow `0.0.0.0/0` (required for Vercel).
4. Copy the connection string → `MONGODB_URI`.

### 2. Gmail App Password (for sending invites)
1. Google Account → Security → enable 2-Step Verification.
2. Security → App Passwords → create one for "Mail".
3. Use your Gmail as `EMAIL_USER` and the 16-char app password as `EMAIL_PASS`.

### 3. Configure and run the API locally
```powershell
cd server
copy .env.example .env    # then fill in the values
npm install
npm run dev               # runs on http://localhost:5000
```

### 4. Run the website
```powershell
npm run dev               # frontend defaults to http://localhost:5000 for the API
```
Open http://localhost:5173/admin-login and log in with the
`ADMIN_EMAIL` / `ADMIN_PASSWORD` you set in `server/.env`.

### 5. Deploy the API to Vercel
The `server/` folder is a standalone Vercel project (same pattern as your
`email-tem-one` service):
1. Push the repo, then in Vercel: **New Project → root directory = `server`**.
2. Add all variables from `server/.env` in Vercel → Project Settings → Environment Variables.
   Set `CORS_ORIGIN` to your live site URL.
3. After deploy, set `VITE_API_URL=https://<your-api>.vercel.app` in the
   frontend's environment (Vercel project for the website) and redeploy the site.

## Security notes

- Admin credentials and JWT secret live only in server env vars — never in React code.
- The JWT expires after 12 hours; the UI auto-redirects to login on 401.
- `POST /api/students` is public (the registration form needs it); reading
  student data and sending emails require the admin JWT.
- The API validates that the link is really `https://meet.google.com/...`.
- Keep `server/.env` out of git (already in `.gitignore`).

## Future features (already fits this design)

- **Attendance** — add an `attendance` collection keyed by meeting id + student id.
- **Scheduling** — add `scheduledAt` to meetings and a cron/reminder job.
- **Student dashboard** — add student login (email OTP) reading the same collections.
- **WhatsApp** — the send endpoint already has every student's WhatsApp number;
  plug in the WhatsApp Cloud API next to `sendMeetingEmail`.
- **Recordings/certificates** — new collections referencing `students` and `meetings`.
