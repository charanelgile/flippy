require('dotenv').config();

const express = require('express');
const connectToDatabase = require('./database/connectToDatabase');

const app = express();

const port = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectToDatabase(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(
        `Starting the Server: Successful\n\nhttp://127.0.0.1:${port} \n`
      );
    });
  } catch (error) {
    console.log(
      `\nDatabase Connection: Failed\nStarting the Server: Failed\n\n${error} \n`
    );
  }
};

startServer();
