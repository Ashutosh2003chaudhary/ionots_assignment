# Ionots Platform

A web application for managing internship projects and tracking progress.

## Features

- View available internship projects
- Accept and work on projects
- Track project progress
- Score tracking
- Project difficulty levels

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: NeDB (Lightweight JavaScript Database)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository_url>
cd ionots-platform
```

### 2. Install Dependencies

#### Backend:
```bash
cd backend
npm install
```

#### Frontend:
```bash
cd ../frontend
npm install
```

### 3. Start the Application

#### Backend:
```bash
cd backend
npm start
```

#### Frontend:
```bash
cd ../frontend
npm start
```

## Project Structure

```
ionots-platform/
├── backend/                 
│   ├── data/               # NeDB database files
│   ├── models/             # Data models
│   ├── routes/             # API routes
│   └── server.js           # Express server
├── frontend/               
│   ├── public/             # Static files
│   └── src/                # React components
│       ├── components/     # UI components
│       └── App.js          # Main component
└── README.md
```

## API Endpoints

### Projects:
- **GET** `/api/projects` - Get all projects
- **POST** `/api/projects` - Create new project

### Assignments:
- **GET** `/api/assignments/:id` - Get assignment details
- **POST** `/api/assignments` - Create new assignment
- **PATCH** `/api/assignments/:id/progress` - Update assignment progress

