# Job Application Tracker (Full Stack)

A full-stack web application to track job applications, built using **Node.js, Express, and MongoDB Atlas**, with a simple frontend dashboard.

---

## 🚀 Features

- Add job applications (company & role)
- View all applications
- Update application status
- Delete applications
- RESTful API architecture
- Cloud database using MongoDB Atlas

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

### Frontend
- HTML
- JavaScript (Fetch API)

### Tools
- Git & GitHub

---

## 📁 Project Structure

job-application-tracker/
│
├── client/
│ ├── index.html
│ └── app.js
│
├── server/
│ ├── models/
│ │ └── Application.js
│ ├── routes/
│ │ └── applications.js
│ ├── server.js
│ └── package.json
│
├── .gitignore
└── README.md


---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ARYANSINGHR4T2/job-application-tracker.git
cd job-application-tracker

2️⃣ Install backend dependencies
cd server
npm install

3️⃣ Create environment file

Create a .env file inside server:

MONGO_URI=your_mongodb_atlas_connection_string

4️⃣ Run backend server
node server.js


Server runs on:

http://localhost:5000

5️⃣ Open frontend

Open this file in browser:

client/index.html

📄 License

This project is created for learning and portfolio purposes.


---

## ✅ FINAL STEP: PUSH README TO GITHUB

Run these commands in project root:

```bat
git add README.md
git commit -m "Improve README documentation"
git push