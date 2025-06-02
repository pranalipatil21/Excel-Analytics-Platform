# 📊 Excel Analytics Platform

A full-stack MERN application that allows users to upload Excel files, analyze data, and generate dynamic 2D/3D charts. The platform features JWT-based authentication, Excel parsing, chart downloads, and optional AI-powered data summaries.

## 🚀 Features

- ✅ **User/Admin Authentication** (JWT-based)
- 📁 **Excel File Upload** and parsing (using `SheetJS`)
- 📊 **Dynamic Data Mapping**: Choose X and Y axes from Excel columns
- 📈 **Graph Generation**: 2D (Chart.js) and 3D (Three.js) support
- 📥 **Download Charts** as PNG or PDF
- 🧠 **AI Tool Integration** (Optional using OpenAI)
- 🗃️ **Dashboard**: Upload history and user data tracking
- 🌐 **Responsive UI** using Tailwind CSS

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux Toolkit
- Chart.js, Three.js
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB
- Multer (for file upload)
- SheetJS (xlsx)

**Optional Tools:**
- OpenAI API (for data summaries)
- Cloudinary (if using image uploads)
- Postman, GitHub

## 📁 Project Structure
excel-analytics-platform/
│
├── client/                      # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/              # Static files (images, logos)
│       ├── components/          # Reusable UI components (Navbar, ChartCard, etc.)
│       ├── pages/               # Page components (Login, Dashboard, Upload, etc.)
│       ├── redux/               # Redux Toolkit slices & store config
│       ├── services/            # Axios API functions (upload, auth, chart)
│       ├── charts/              # Chart.js and Three.js rendering utilities
│       ├── utils/               # Helper functions (e.g., file converters, validators)
│       ├── App.js
│       └── main.jsx             # App entry point
│
├── server/                      # Express Backend
│   ├── config/                  # DB connection, environment setup
│   ├── controllers/             # Logic for auth, file handling, chart data
│   ├── models/                  # Mongoose models (User, File, History)
│   ├── routes/                  # API routes (auth, upload, analysis)
│   ├── middleware/              # JWT auth, error handling, file filtering
│   ├── utils/                   # Excel parser, chart export, AI integration
│   ├── uploads/                 # Temp storage for uploaded files (can be ignored in Git)
│   ├── server.js                # App entry point
│   └── .env                     # Environment variables
│
├── .gitignore
├── README.md
└── package.json                 # Optional monorepo config or scripts
