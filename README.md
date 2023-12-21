
# Job Portal Backend

## Description

This repository contains the Node.js backend for a job portal application. It provides RESTful APIs to manage users, jobs, applications, and other job-related data. It's built with:

Node.js
Express.js
MongoDB (using Mongoose)

## Getting Started

Prerequisites:
Node.js 
MongoDB
Installation:

Clone the repository:

Bash
git clone https://github.com/Piyusharora2003/Job-portal-Backend.git
Install dependencies:

Create a .env file in the root directory and set the required environment variables.
PORT = 5000
MODE = "Development"
DB_URL = "your-url-string
JWT_SECRET = "jwtsecretkey"

Running the Server:

Start the development server:
npm run dev
Use code with caution. Learn more

## API Endpoints
Endpoint	Method	Description
/api/v1/auth/login	  POST Login an already registered user
/api/v1/auth/register	POST	Register a new user
/api/v1/user/myInfo	  GET	  Get logged in user details (authenticated)
/api/v1/user/updateUser	PUT	updates user info(authenticated)
/api/v1/job/:id	GET	Get job details by ID
....

## Folder Structure

job-portal-backend/
├── config/             # Configuration files, env
├── controllers/        # Request handlers
├── middlewares/        # Custom middleware
├── models/             # Mongoose models
├── routes/             # API routes
├── package.json
├── README.md
