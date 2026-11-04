# 🎬 Movie Management System

A RESTful API built using **Node.js, Express.js, MongoDB, Mongoose, and Multer**. This project allows users to manage movies and upload movie posters.

## 🚀 Features

- Add a new movie
- Upload movie posters
- View all movies
- View a single movie by ID
- Update movie details
- Delete a movie
- Store movie data in MongoDB

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- dotenv

## 📁 Project Structure

```text
Movie-Management-System/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── movieController.js
│
├── middleware/
│   └── upload.js
│
├── models/
│   └── Movie.js
│
├── routes/
│   └── movieRoutes.js
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

## ⚙️ Installation

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_LINK
```

2. Open the project folder:

```bash
cd Movie-Management-System
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```env
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/movieDB
```

5. Start the server:

```bash
npm start
```

Or, if using nodemon:

```bash
npm run dev
```

## 🔗 API Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| POST | `/addmovie` | Add a movie with poster |
| GET | `/movies` | Get all movies |
| GET | `/movies/:id` | Get movie by ID |
| PUT | `/editMovie/:id` | Update movie details |
| DELETE | `/deleteMovie/:id` | Delete a movie |

## 🎥 Project Demo

Watch the complete project demonstration:

**[▶ Watch Movie Management System Video](https://drive.google.com/file/d/1c-YIjRvkb-6d1zkqVHLg5uxyq50oqTFW/view?usp=sharing)**

## 👨‍💻 Developer

**Alfaz Memon**

BCA Student | Full Stack Development Learner

- GitHub: [AlfazMemon](https://github.com/AlfazMemon)

---

⭐ If you like this project, don't forget to give it a star!
