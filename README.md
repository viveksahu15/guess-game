# 🕹️ Guess Game – Leaderboard System

A fullstack leaderboard web application where users can be added, claim points, and compete for top spots in a visually appealing leaderboard UI.

Built with:
- ⚛️ React (frontend)
- 🌐 Node.js + Express (backend)
- ☁️ MongoDB Atlas (cloud database)

---

## 🌐 Live Demo

- **Frontend (Netlify)**: [https://leaderboard-random-game.netlify.app](https://leaderboard-random-game.netlify.app)
- **Backend (Render)**: [https://guess-game-1-cyyd.onrender.com/api/users](https://guess-game-1-cyyd.onrender.com/api/users)
- **Database (MongoDB Atlas)**:  
  `mongodb+srv://intern_viewer:readonly123@cluster0.ntakzq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

---

## ✨ Features

- ➕ Add new users
- 🎯 Claim random points for selected user
- 🏆 Visually enhanced leaderboard with top 3 highlights and animations
- 🔐 Integrated with MongoDB Atlas cloud database

---

## 📂 Project Structure

```
guess-game/
├── Backend/             # Express server + API routes
│   └── routes/
│   └── models/
├── Frontend/            # React app
│   └── src/
│       └── components/
│       └── styles/
```

---

## 🚀 Getting Started Locally

### 🔧 Backend Setup

```bash
git clone https://github.com/viveksahu15/guess-game
cd guess-game/Backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Paste this into your `.env`:

```env
MONGO_URI=mongodb+srv://intern_viewer:readonly123@cluster0.ntakzq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

Then run the server:

```bash
node server.js
```

---

### 💻 Frontend Setup

```bash
cd ../Frontend

# Install dependencies
npm install

# Start the React dev server
npm start
```

---

## 📦 Deployed URLs

| Platform | Service     | Link                                                                 |
|----------|-------------|----------------------------------------------------------------------|
| Netlify  | Frontend    | [leaderboard-random-game.netlify.app](https://leaderboard-random-game.netlify.app) |
| Render   | Backend     | [guess-game-1-cyyd.onrender.com/api/users](https://guess-game-1-cyyd.onrender.com/api/users) |
| MongoDB  | Atlas       | `intern_viewer@cluster0` – hosted on MongoDB Atlas cloud             |

---

## 🧠 Tech Stack

- **Frontend**: React, CSS Animations, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas
- **Hosting**: Netlify (frontend), Render (backend)

---

## 🤝 Author

**Vivek Sahu**  
[GitHub – viveksahu15](https://github.com/viveksahu15)
