const mongoose = require('mongoose');

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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Player', PlayerSchema);
