const express = require("express");
const router = express.Router();

// Root Route
router.get("/", (req, res) => {
  // res.render("index.hbs");
  res.send("<h3>Root Route</h3>");
});

// Admin Route
router.get("/admin", (req, res) => {
  // res.render("admin.hbs");
  res.send("<h3>Admin Route</h3>");
});

// Player Route
router.get("/player", (req, res) => {
  // res.render("player.hbs");
  res.send("<h3>Player Route</h3>");
});

module.exports = router;
