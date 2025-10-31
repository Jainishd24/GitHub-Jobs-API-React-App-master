# 💼 GitHub Jobs API React App

A full-stack job listing platform built with **React** (frontend) and **Node.js + Express** (backend).  
It fetches remote job listings using a third-party API (RemoteOK / GitHub Jobs style) and displays them beautifully with search and pagination.

---

## 🚀 Features

- 🔍 Search jobs by description, location, and full-time status  
- 📃 Expandable job descriptions  
- 💰 Salary and type badges  
- 🧠 Smart API proxy backend to bypass CORS  
- ⚡ Pagination for seamless job browsing  
- 🌐 Fully deployable (Frontend + Backend) on Netlify / Render

---

## 🧠 How It Works

- The **backend (`server.mjs`)** fetches jobs from the RemoteOK API and serves them at `http://localhost:5000/jobs`.  
- The **frontend (React)** requests data from this backend (instead of directly from RemoteOK) to avoid CORS issues.  
- The jobs are displayed in a responsive Bootstrap layout with filters and pagination.

---

## ⚙️ Technologies Used

**Frontend**
- React.js  
- React Bootstrap  
- Axios  
- React Hooks (useState, useEffect)

**Backend**
- Node.js  
- Express.js  
- Axios  
- CORS

---

## 🏗️ 2️⃣ Project Structure

GitHub-Jobs-API-React-App-master/

    ├── backend/
    
        │ ├── server.mjs # Express backend to fetch jobs via proxy
        │ ├── package.json # Backend dependencies
        │ └── ... # Other backend files
    
    ├── src/
    
        │ ├── App.js # Main React component
        │ ├── Job.js # Job card component
        │ ├── JobsPagination.js # Pagination component
        │ ├── SearchForm.js # Job search filter form
        │ ├── useFetchJobs.js # Custom hook to fetch jobs
        │ ├── index.js # React entry point
        │ └── ... # Other React components or styles
    
    ├── public/
    
        │ ├── index.html # HTML template for React app
        │ └── favicon.ico # App icon
    
    ├── package.json # Frontend dependencies
    ├── README.md # Project documentation
    └── .gitignore # Git ignored files list

---

## ⚙️ 2️⃣ Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v16 or newer)
- npm (comes with Node.js)
- Git

---

## 🧠 3️⃣ Clone the Repository

    Open Command Prompt / Terminal and run:
    
    git clone https://github.com/Jainishd24/GitHub-Jobs-API-React-App-master.git
    cd GitHub-Jobs-API-React-App-master

---

## 🚀 4️⃣ Start the Backend 

    Install dependencies 
    npm install
    
    Run the backend server: 
    node server.mjs 
    
    ✅ The backend will start running on: http://localhost:5000 
    Keep this terminal open — don’t close it.

--- 
## 💻 5️⃣ Start the Frontend

    Open a new terminal 
    
    Start the React app: 
    npm start 
    
    ✅ The frontend will open automatically at: http://localhost:3000
