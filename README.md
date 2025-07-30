# 📦 Todo App Backend

This is the backend for the **Todo App**, built with **Express.js**, **TypeScript**, and **Prisma**. It provides a RESTful API to manage tasks in a MySQL database.

## 🚀 Getting Started

Follow the instructions below to set up and run the backend server locally.

---

## 🧰 Prerequisites

- **Node.js** (v18+)
- **MySQL** database
- **npm** or **yarn**

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Varshith-p/todo-app-backend.git
cd todo-app-backend
```

### 2. Install dependencies

Make sure you have **Node.js (v18 or later)** and **npm** installed.

```bash
npm install
```

### 3. Environment variables

Create a **.env** file in the root directory and add the following:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
PORT=5000
```

An example env file is also given in the repository as .env.example

### 4. Initialize the database using Prisma

Run the following command:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

This will generate the Prisma client and run the migration to set up your database schema.

### 5. Start the development server

Run the following command:

```bash
npm run dev
```

The API will be running at: http://localhost:5000

## 📜 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | update task       |
| DELETE | `/api/tasks/:id` | Delete a task     |

## 🛠 Scripts

| Script           | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the server in development mode |
| `npm run build`  | Compile TypeScript to JavaScript     |
| `npm start`      | Start the compiled server            |
| `npx prisma ...` | Run Prisma CLI commands              |

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **MySQL**
