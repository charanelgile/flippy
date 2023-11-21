const router = require('express').Router();
const {
  registerPlayer,
  loginPlayer,
  leaderboard,
} = require('../controllers/playerControllers');
const authentication = require('../middlewares/authentication');

// Register Player
router.post('/register', registerPlayer);

// Login Player
router.post('/login', loginPlayer);

// Rank Players
router.get('/leaderboard', authentication, leaderboard);

module.exports = router;
