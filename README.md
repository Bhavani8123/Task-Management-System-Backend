# Task Management System (Backend)

A backend Task Management System built using **Node.js, Express.js, MongoDB, and JWT authentication**.  
This application allows users to securely register, log in, and manage their personal tasks through protected REST APIs.

## Features

- User Registration and Login
- JWT-based Authentication
- Protected Routes using Middleware
- Create, Read, Update, Delete (CRUD) operations for tasks
- User-specific task access
- MongoDB database integration
- Proper error handling and validation
- Scalable project structure

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Token (JWT)  
- **ODM:** Mongoose  
- **Tools:** Postman, Git, Nodemon  

## Project Structure
task-manager/
├── config/
│ └── db.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ └── Task.js
├── routes/
│ ├── authRoutes.js
│ └── taskRoutes.js
├── .env
├── server.js
├── package.json
└── README.md

---

## Environment Variables

Create a `.env` file in the root directory and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## How to Run the Project

1. Clone the repository
   ```bash
   git clone <repository_url>
2. Navigate to project folder

cd task-manager

3. Install dependencies

npm install

4. Start the server

npm run dev

5.Server will run on:

http://localhost:5000
