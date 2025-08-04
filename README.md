
# 🧠 CareerPath.io Backend – Job Portal API

This is the **backend API** for the CareerPath.io project — a full-stack AI-powered job portal. Built with **Node.js**, **Express**, and **MongoDB**, the backend handles authentication, job postings, application processing, and admin operations.

![Node.js](https://img.shields.io/badge/Backend-Node.js-green) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen) ![JWT](https://img.shields.io/badge/Auth-JWT-yellow)

---

## 🚀 Features

- JWT-based authentication
- User registration & login
- Admin job creation
- Job application submission
- Resume, LinkedIn, GitHub, and portfolio links
- Application status updates
- Role-based route protection

---

## 📁 Folder Structure

```
Job_Portal_Ai/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env
├── index.js
└── package.json
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=5050
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🧪 Run Locally

```bash
git clone https://github.com/chetan-c/Job_Portal_Ai.git
cd Job_Portal_Ai
npm install
npm run dev
```

---

## 📡 API Endpoints

| Method | Route                    | Description                  |
|--------|--------------------------|------------------------------|
| POST   | /api/register            | Register new user            |
| POST   | /api/login               | Login user                   |
| GET    | /api/jobs                | Get all jobs                 |
| POST   | /api/jobs                | Create a job (Admin only)    |
| POST   | /api/apply               | Submit job application       |
| PUT    | /api/application/:id     | Update application status    |
| GET    | /api/users/:id           | Get user profile             |

---

## 🔐 Admin Access

To make a user admin, set `isadmin: true` in their MongoDB document manually.

---

## 🧑‍💻 Author

Developed by [Chetan Kamble](https://github.com/chetan-c)  
📧 chetankambleck@gmail.com

---
