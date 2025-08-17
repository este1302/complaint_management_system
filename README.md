Project Overview

This project is a web-based Complaint Management System designed to allow users to register, track, and manage complaints efficiently. It has both backend and frontend components and includes automated testing and deployment setup.

Key Features Implemented

Complaint Registration: Users can submit new complaints with title, description, and deadlines.

Complaint Tracking: Admins or users can view, update, and delete complaints.

Task Management: Each complaint can have associated tasks that can be added, updated, or removed.

Backend Development

Node.js + Express used for RESTful APIs.

MongoDB used for storing complaints and tasks.

Mongoose models created for Task and Complaint.

Testing with Mocha & Sinon:

Added unit tests for adding, updating, fetching, and deleting tasks.

Tests ensure error handling for DB errors and invalid requests.

Frontend Development

Basic UI for viewing complaints and tasks (can be extended with React or another frontend framework).

Frontend is built using Yarn and structured for easy integration with backend APIs.

CI/CD Setup

GitHub Actions workflow (ci.yml) created to:

Install backend and frontend dependencies

Run backend tests (npm test)

Build frontend

Restart backend automatically using pm2

Self-hosted GitHub runner configured on AWS EC2 for automated deployments.

Server Setup (AWS EC2)

Nginx configured to serve the app.

/var/www/myapp used as the deployment folder.

PM2 used to keep backend services running.