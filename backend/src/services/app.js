const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("../config/mongodb");

const helloRoutes = require("../routes/helloRoutes");
const adminRoutes = require("../routes/adminRoutes");
const contentRoutes = require("../routes/contentRoutes");
 

const app = express();

// connect DB
connectDB();

// middleware
app.use(
  cors()
);
app.use(express.json());

// routes
app.use("/api/hello", helloRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/content", contentRoutes);
// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});