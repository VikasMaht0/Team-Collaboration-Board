Team Collaboration Board

A simple Kanban-style task management app built with:

Backend: Node.js, Express, MongoDB, Mongoose

Frontend: React (Vite), Fetch API

📦 Project Structure
project-root/
│── my-backend/     # Express + MongoDB API
│── my-frontend/    # React frontend (Vite)
# Backend (my-backend)
1️⃣ Setup
cd my-backend
npm install

2️⃣ Environment Variables
Create a .env file in my-backend/:
MONGO_URL=mongodb://localhost:27017/task-manager
PORT=4000

3️⃣ Run Server
npm start

Server runs at: http://localhost:4000
Health check: http://localhost:4000/health

#API Endpoints
Boards

GET /boards → Get all boards

POST /boards → Create a new board

Tasks

GET /boards/:id/tasks → Get all tasks for a board

POST /boards/:id/tasks → Create a new task in a board

PUT /tasks/:id → Update a task

DELETE /tasks/:id → Delete a task

#Frontend (my-frontend)
1️⃣ Setup
cd my-frontend
npm install

2️⃣ Environment Variables
Create .env in my-frontend/ (Vite uses VITE_ prefix):
VITE_API_BASE=http://localhost:4000

3️⃣ Run Frontend
npm run dev

App runs at: http://localhost:5173
 (default Vite port)

#Features

✅ Create multiple boards
✅ Add, edit, and delete tasks
✅ Drag-and-drop style status management (To Do, In Progress, Done)
✅ Task fields: title, description, priority, assigned user, due date
✅ Responsive layout

#Tech Stack

Backend: Node.js, Express, MongoDB, Mongoose
Frontend: React (Vite), Fetch API
Styling: CSS (customizable)

#Contributing
Pull requests are welcome! Please open an issue first to discuss major changes.
