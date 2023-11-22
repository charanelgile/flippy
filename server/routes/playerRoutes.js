const router = require('express').Router();
const {
  registerPlayer,
  loginPlayer,
  leaderboard,
  saveHighScore,
} = require('../controllers/playerControllers');
const authentication = require('../middlewares/authentication');

// Register Player
router.post('/register', registerPlayer);

// Login Player
router.post('/login', loginPlayer);

// Leaderboard
router.get('/leaderboard', authentication, leaderboard);

// Save High Score
router.patch('/update/:id', authentication, saveHighScore);

module.exports = router;
