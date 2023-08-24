const express = require("express");
const router = express.Router();

// Root Route
router.get("/", (req, res) => {
  // res.render("index.hbs");
  res.send("<h1>This will be the Root Route</h1>");
});

// Admin Route
router.get("/admin", (req, res) => {
  res.render("admin.hbs");
});

// Player Route
router.get("/player", (req, res) => {
  res.render("player.hbs");
});

module.exports = router;
