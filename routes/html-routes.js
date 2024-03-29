// This file is used to route the user to the correct html page when the user navigates through the app.
const router = require("express").Router();
const path = require("path");

// Routes to index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Routes to notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Export the router
module.exports = router;