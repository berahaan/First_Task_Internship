🖥️ MERN Stack Role-Based Access Pages

📋 Project Description

This project is a web application built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling. It efficiently manages user roles and authentication to ensure secure access to specific pages.

✨ Features

- User Registration and Authentication:

- Manager can register users with predefined roles (Manager, HR, Receptionist).

-Secure login mechanism to authenticate users.

Role-Based Access Control

-Managers, HR, and Receptionists are granted access to specific pages.

-Prevents unauthorized access to restricted routes.

Session Management

-Monitors user sessions to track visits and maintain access integrity.

-Ensures users can only access pages after logging in.

Dynamic Styling

-Fully styled with Tailwind CSS for a responsive and modern design.

🚀 Technologies Used

Frontend: React, Tailwind CSS

Backend: Express.js (Node.js)

Database: MongoDB

Session Management: Express-Session

🛠️ Backend Powered by Express.js

The backend of this project provides:

Authentication: Handles secure user login and role verification.

Role-based Route Protection: Ensures each role has access to its designated routes.

Session Management: Tracks active sessions and enforces login requirements.

Responsibilities of the Backend:

Handle user registration and role assignment.

Manage role-specific APIs for accessing data and features.

Secure sensitive data using JWT and Express-Session.

🗄️ MongoDB for Database Management

MongoDB is used to store and manage all user and session data efficiently. Key collections include:

Users: Stores user information, roles, and authentication details.

Sessions: Tracks active user sessions for security and access control.

setup Instructions 
1.clone repository
```bash
gir clone https://github.com/berahaan/First_task_Internship
```
2.navigae to directory

```bash
cd Backend
cd Frontend 
```
3.install dependency

```bash
npm install
```
4.run development server 

```bash
npm run dev
npm start
```
5.open your browsers and enjoy it 
