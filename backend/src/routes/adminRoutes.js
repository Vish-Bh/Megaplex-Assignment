const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../controllers/adminController");
const auth = require("../middleware/auth");

// login
router.post("/login", loginAdmin);

// protected route
router.get("/dashboard", auth, (req, res) => {
  res.json({ message: "Welcome Admin 🔐", user: req.user });
});

module.exports = router;