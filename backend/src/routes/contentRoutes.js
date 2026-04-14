const express = require("express");
const router = express.Router();

const {
  saveContent,
  getContent,
} = require("../controllers/contentController");

// POST → save
router.post("/save", saveContent);

// GET → fetch
router.get("/", getContent);

module.exports = router;