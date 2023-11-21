const jwt = require('jsonwebtoken');

const authentication = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: {
        message: 'Access denied',
      },
    });
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.player = {
      playerID: payload.playerID,
      playerEmail: payload.playerEmail,
    };

    next();
  } catch (error) {
    console.log(error);

    res.status(401).json({
      error: {
        message: 'Invalid credentials',
      },
    });
  }
};

module.exports = authentication;
