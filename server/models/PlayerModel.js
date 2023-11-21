const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PlayerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Please provide your First Name'],
      minlength: 3,
    },
    lastname: {
      type: String,
      required: [true, 'Please provide your Last Name'],
      minlength: 2,
    },
    username: {
      type: String,
      required: [true, 'Please provide your Username'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your Email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid Email',
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
    },
    highscore: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Encrypt Password
PlayerSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

// Compare Password
PlayerSchema.methods.comparePassword = async function (candidatePassword) {
  const isPasswordMatched = await bcrypt.compare(
    candidatePassword,
    this.password
  );

  return isPasswordMatched;
};

// Generate Token
PlayerSchema.methods.generateToken = function () {
  return jwt.sign(
    // Payload
    {
      playerID: this._id,
      playerEmail: this.email,
    },
    // Signature
    process.env.JWT_SECRET,
    // Options
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

module.exports = mongoose.model('Player', PlayerSchema);
