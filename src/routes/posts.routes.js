const express = require("express");
const router = express.Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
  res.send("Fetching all blog posts from the modular router!");
});

// Optional POST route (extra)
router.post("/", (req, res) => {
  res.send("Creating a new blog post...");
});

module.exports = router;
