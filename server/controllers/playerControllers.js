const Player = require('../models/PlayerModel');

// Register Player
const registerPlayer = async (req, res) => {
  const { firstname, lastname, codename, email, password } = req.body;

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

  if (!codename) {
    return res.status(400).json({
      error: {
        message: 'Code Name cannot be empty',
      },
    });
  } else {
    const player = await Player.findOne({ codename });

    if (player) {
      return res.status(400).json({
        error: {
          message: 'Code Name already taken',
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
      codename: player.codename,
      firstname: player.firstname,
      lastname: player.lastname,
      highscore: player.highscore,
    },
    token,
  });
};

// Login Player
const loginPlayer = async (req, res) => {
  const { codename, password } = req.body;

  if (!codename) {
    return res.status(400).json({
      error: {
        message: 'Code Name cannot be empty',
      },
    });
  }

  if (!password) {
    return res.status(400).json({
      error: {
        message: 'Password cannot be empty',
      },
    });
  }

  const player = await Player.findOne({ codename });

  if (!player) {
    return res.status(404).json({
      error: {
        message: 'Code Name not found',
      },
    });
  }

  const isPasswordCorrect = await player.comparePassword(password);

  if (!isPasswordCorrect) {
    return res.status(401).json({
      error: {
        message: 'Incorrect Password',
      },
    });
  }

  const token = player.generateToken();

  res.status(200).json({
    player: {
      codename: player.codename,
      firstname: player.firstname,
      lastname: player.lastname,
      highscore: player.highscore,
    },
    token,
  });
};

module.exports = {
  registerPlayer,
  loginPlayer,
};
