# Notes Application - Full Stack Project

A full-stack web application for creating, storing, and sharing notes. Built with **React.js** frontend and **Node.js/MySQL** backend.

--

## 📖 Project Overview

This is a **Notes Application** that allows users to:
- Create text notes with auto-generated unique URLs
- Access notes via shareable links
- View and manage notes through a modern React interface

The project consists of two separate applications:
- **Backend**: Node.js HTTP server with MySQL database (port 3500)
- **Frontend**: React.js SPA with React Router (port 3000)

---

## ✨ Features

- ✅ Create notes with unique auto-generated URLs
- ✅ Retrieve notes by URL
- ✅ Responsive UI with React components
- ✅ Client-side routing with React Router DOM
- ✅ CORS-enabled API for cross-origin requests
- ✅ MySQL database with Sequelize ORM
- ✅ Timestamp tracking for note creation

---

## 🛠 Tech Stack

### Frontend (`react_project/`)
- **React** 18.2.0
- **React Router DOM** 6.20.1
- **Create React App** (CRA)
- **CSS3** (custom styles)
- **Jest** & **React Testing Library** (testing)

### Backend (`backend_project/`)
- **Node.js** (native HTTP server)
- **MySQL** (database)
- **Sequelize** 6.3.5 (ORM)
- **mysql2** 2.2.5 (MySQL driver)
- **randomstring** 1.1.5 (URL generation)

---

## 📁 Project Structure

```
project/
├── backend_project/                 # Node.js Backend
│   ├── db/
│   │   ├── index.js                 # Sequelize DB connection
│   │   └── Notes.js                 # Notes model definition
│   ├── index.js                     # Main server entry point (port 3500)
│   ├── reactjs.sql                  # Database schema & sample data
│   ├── package.json                 # Backend dependencies
│   └── package-lock.json
│
├── react_project/                   # React Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.js             # About page
│   │   │   ├── Create.js            # Note creation form
│   │   │   ├── Error.js             # 404 Error page
│   │   │   ├── Footer.js            # Footer component
│   │   │   ├── Header.js            # Header/Navigation
│   │   │   ├── Main.js              # Home page
│   │   │   └── Note.js              # Note display component
│   │   ├── App.js                   # Main app with routing
│   │   ├── App.css                  # App styles
│   │   ├── index.js                 # React entry point
│   │   ├── index.css                # Global styles
│   │   └── env.json                 # Environment config
│   ├── package.json                 # Frontend dependencies
│   ├── README.md                    # CRA documentation
│   └── .gitignore
│
└── .idea/                           # IDE configuration
```
