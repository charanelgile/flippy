const router = require('express').Router();
const {
  registerPlayer,
  loginPlayer,
  rankPlayers,
} = require('../controllers/playerControllers');
const authentication = require('../middlewares/authentication');

// Register Player
router.post('/register', registerPlayer);

// Login Player
router.post('/login', loginPlayer);

// Rank Players
router.get('/ranking', authentication, rankPlayers);

module.exports = router;
