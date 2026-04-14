# 🏡 Megaplex — Real Estate Website with Admin Panel

A full-stack real estate website with a dynamic admin panel for managing all text content. Built using **React.js**, **Node.js (Express)**, and **MongoDB Atlas**, with JWT-based authentication and persistent admin sessions.

---

## 🌐 Live Demo

| | URL |
|---|---|
| 🖥️ **Frontend** | https://megaplex-assignment-1z6c-hrt5o5qd1-vish-bhs-projects.vercel.app/|
| 🔧 **Backend API** |https://megaplex-assignment-mtl4.onrender.com/|

---

## ✨ Features

### 🌍 Public Website
- Responsive real estate landing page closely matching the provided reference design
- Dynamic content loaded from the backend API
- Sections include:
  - **Hero Section**
  - **Project Overview**
  - **Nearby Connectivity**
  - **Amenities**
  - **About Us**
  - **Construction Updates**
  - **FAQ**
- Emojis used as image placeholders due to time constraints (layout and UX match the reference)

### 🔐 Admin Panel
- Secure login with JWT authentication
- Persistent login — remains logged in after hard refresh (token stored in `localStorage`)
- Edit text content dynamically for all sections:
  - Hero section text
  - Project overview content
  - Nearby connectivity details
  - Amenities titles & descriptions
  - About Us content
  - Construction update labels
  - FAQ questions & answers
- All changes saved to MongoDB Atlas and reflected live on the website
- Protected routes — unauthenticated users are redirected to login

---

## 🔑 Admin Credentials

```
Email:    admin@gmail.com
Password: 1234
```

> Go to `/admin/login` on the frontend to access the admin panel.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Context API, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Auth | JWT (JSON Web Tokens) |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

**Languages used:** JavaScript (90.7%), TypeScript (8.5%), CSS (0.8%)

---

## 📁 Folder Structure

```
Megaplex-Assignment/
├── realesate/              # React.js frontend
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page-level views (Home, Admin)
│       ├── context/        # Auth context & state management
│       └── App.js
│
├── backend/                # Node.js + Express backend
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API route definitions
│   ├── controllers/        # Business logic
│   ├── middleware/         # JWT auth middleware
│   └── server.js
│
├── .gitignore
└── README.md
```

---
## Screenshots
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/33c6596f-8ac2-4c3e-af16-14a9b54000df" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/692440a8-07f7-42e2-ba16-da5a09e658fd" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/2b19cf85-1ac5-49e1-92a7-0716c819cf98" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/fab1c283-c50e-468c-9ec0-8eb42e1523d7" />

---

## ⚙️ Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository

```bash
git clone https://github.com/Vish-Bh/Megaplex-Assignment.git
cd Megaplex-Assignment
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../realesate
npm install
```

Create a `.env` file inside `realesate/`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm start
```

Frontend runs at: `http://localhost:3000`

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Admin login — returns JWT token |

### Content
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/content` | Fetch all website section content |
| `PUT` | `/api/content/:section` | Update a section's content *(protected)* |

---

## 🔐 Authentication Flow

1. Admin submits credentials at `/admin/login`
2. Backend validates and returns a **JWT token**
3. Token is saved in **localStorage**
4. On page refresh, token is read from localStorage and user stays logged in
5. All protected API routes verify the token via JWT middleware

---

## ✅ Assignment Requirements Checklist

- [x] Exact replica of the provided real estate webpage (structure & UX)
- [x] Functional Admin Panel with text content editing
- [x] Fixed admin credentials (`admin@gmail.com` / `1234`)
- [x] All mentioned sections are editable from admin panel
- [x] Images kept static (emojis used as placeholders)
- [x] Frontend deployed on Vercel
- [x] Backend deployed on Render
- [x] MongoDB Atlas as database
- [x] JWT authentication with persistent login after refresh
- [x] All data stored and served from the database

---

## 🔮 Future Improvements

- Image CMS integration (Cloudinary / S3)
- Rich text editor for section content
- Role-based access control
- Analytics dashboard for admin
- Enhanced UI animations and transitions

---

## 🎨 Design Note

Due to time constraints, placeholder emojis were used instead of actual property images. The layout structure, section flow, and overall user experience closely match the provided reference design.

---

## 👨‍💻 Author

**Vishal Bhatt** — [GitHub](https://github.com/Vish-Bh)

---

*Built with ❤️ for the Frontend + Backend Assignment*
