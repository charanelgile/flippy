const router = require('express').Router();
const {
  registerPlayer,
  loginPlayer,
} = require('../controllers/playerControllers');

// Register Player
router.post('/register', registerPlayer);

// Login Player
router.post('/login', loginPlayer);

module.exports = router;
