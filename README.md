# Real Estate Website with Admin Panel

## 🏡 Project Overview
This is a full-stack real estate website with a functional admin panel that allows dynamic editing of website content. The frontend replicates the provided design reference, while the backend manages all editable text content through APIs connected to MongoDB Atlas.

---

## 🚀 Tech Stack

### Frontend:
- React.js
- Context API / State Management
- Axios (API calls)

### Backend:
- Node.js
- Express.js
- JWT Authentication
- MongoDB Atlas (Database)

---

## 🔐 Authentication
- Admin login is implemented using fixed credentials:
  - **Email:** admin@gmail.com  
  - **Password:** 1234
- JWT token-based authentication is used.
- Token is stored in localStorage to persist login even after page refresh.
- Protected routes ensure only authenticated admin can access the dashboard.

---

## 🧩 Features

### Website Features:
- Fully responsive real estate landing page
- Sections include:
  - Hero Section
  - Project Overview
  - Connectivity Section
  - Amenities
  - About Us
  - Construction Updates
  - FAQ

### Admin Panel Features:
- Secure login system
- Edit text content for all sections
- Live updates reflected on frontend
- Persistent login (no re-login after refresh)

---

## 🗄️ Database
- MongoDB Atlas is used for cloud database storage
- Stores all editable section content in structured collections

---

## 🔧 Setup Instructions

### 1. Clone Repository
```bash
git clone <your-repo-link>
