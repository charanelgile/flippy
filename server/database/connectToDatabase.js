const mongoose = require('mongoose');

const connectToDatabase = async (url) => {
  await mongoose.connect(url);

  console.log('\nDatabase Connection: Successful');
};

module.exports = connectToDatabase;
