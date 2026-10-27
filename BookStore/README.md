# 📚 BookStore API

A REST API built using **Node.js, Express.js, and MongoDB** to manage books with CRUD operations.

## 🎥 Video Demo

▶️ **Watch the Project Demo:** [Click here to watch](https://drive.google.com/file/d/1S8BOh0V3B7vRBJJkDRG0SXOEasxu-hAg/view?usp=drive_link)

<!-- Replace YOUR_VIDEO_LINK_HERE with your video link -->

## 🚀 Features

* ➕ Add new books
* 📖 Get all books
* ✏️ Update book details
* 🗑️ Delete books
* 🗄️ Store book data in MongoDB
* 🔗 RESTful API endpoints

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Thunder Client

## 📋 Book Schema

| Field     | Type    |
| --------- | ------- |
| title     | String  |
| author    | String  |
| price     | Number  |
| category  | String  |
| stock     | Number  |
| published | Boolean |
| rating    | Number  |

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd BookStore
```

**3. Install dependencies**

```bash
npm install express mongoose
```

**4. Start MongoDB**

Make sure your local MongoDB server is running.

**5. Run the application**

```bash
node index.js
```

The server will start at:

`http://localhost:1234`

## 🔗 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/books`     | Add a new book |
| GET    | `/books`     | Get all books  |
| PUT    | `/books/:id` | Update a book  |
| DELETE | `/books/:id` | Delete a book  |

## 📥 Example Request Body

Use this JSON body to add a book using Thunder Client.

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 450,
  "category": "Self-Help",
  "stock": 25,
  "published": true,
  "rating": 4.8
}
```

## 🧪 Testing

Test the API endpoints using **Thunder Client** or **Postman**.

**Base URL:** `http://localhost:1234`

## 👨‍💻 Author

**Alfaz Memon**

GitHub: [AlfazMemon](https://github.com/AlfazMemon)

---

⭐ If you like this project, consider giving it a star!
