const Player = require('../models/PlayerModel');

// Register Player
const registerPlayer = async (req, res) => {
  res.send('Register Player');
};

// Login Player
const loginPlayer = async (req, res) => {
  res.send('Login Player');
};

module.exports = {
  registerPlayer,
  loginPlayer,
};
