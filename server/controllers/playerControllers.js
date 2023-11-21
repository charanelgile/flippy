const Player = require('../models/PlayerModel');

// Register Player
const registerPlayer = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  if (!firstname) {
    return res.status(400).json({
      error: {
        message: 'First Name cannot be empty',
      },
    });
  }

  if (!lastname) {
    return res.status(400).json({
      error: {
        message: 'Last Name cannot be empty',
      },
    });
  }

  if (!username) {
    return res.status(400).json({
      error: {
        message: 'Username cannot be empty',
      },
    });
  } else {
    const player = await Player.findOne({ username });

    if (player) {
      return res.status(400).json({
        error: {
          message: 'Username already taken',
        },
      });
    }
  }

  if (!email) {
    return res.status(400).json({
      error: {
        message: 'Email cannot be empty',
      },
    });
  } else {
    const player = await Player.findOne({ email });

    if (player) {
      return res.status(400).json({
        error: {
          message: 'Email already exists',
        },
      });
    }
  }

  if (!password) {
    return res.status(400).json({
      error: {
        message: 'Password cannot be empty',
      },
    });
  }

  const player = await Player.create({ ...req.body });

  const token = player.generateToken();

  res.status(201).json({
    player: {
      codename: player.username,
      firstname: player.firstname,
      lastname: player.lastname,
      highscore: player.highscore,
    },
    token,
  });
};

// Login Player
const loginPlayer = async (req, res) => {
  res.send('Login Player');
};

module.exports = {
  registerPlayer,
  loginPlayer,
};
