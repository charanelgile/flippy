const express = require("express");
const router = express.Router();

const playerController = require("../controllers/playerController.js");

// Player Sign In / Sign Up
router.post("/signup", playerController.signup);
router.post("/signin", playerController.signin);

// Player Edit / Update
router.get("/edit/:codename", playerController.edit);
router.post("/update", playerController.update);

// Player Delete / Remove
router.get("/delete/:codename", playerController.delete);
router.post("/remove", playerController.remove);

// Player Logout
router.get("/signout", playerController.signout);

module.exports = router;
