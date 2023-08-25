const express = require("express");
const dotenv = require("dotenv");
const cookie_parser = require("cookie-parser");
let cors = require("cors");

const app = express();
const port = 4000;

// Define the Environment Variables' Configuration Path
dotenv.config({
  path: "./.env",
});

// Define the Default Templating Engine - Handlebars
app.set("view engine", "hbs");

// Parser for Cookies
app.use(cookie_parser());

// Parser for Incoming JSON Data
app.use(express.json());

// Parser for URL Data sent by Users from Forms
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Allow Cross-Origin Requests
app.use(cors());

// Configure the Express Server to Serve Static Files
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/extras"));

// Confiigure the Express Server to Listen to the specified Port
app
  .listen(port, () => {
    console.log(`\nServer successfully started at http://localhost:${port}\n`);
  })
  .on("error", (error) => {
    console.log(`\nServer failed to start at Port ${port}\n${error.message}\n`);
  });

// -----------------------------------------------------------------//

// Player Controller
const playerController = require("./controllers/playerController.js");

// Player Routes - Sign Up / Sign In
app.use("/player/signup", playerController.signup);
app.use("/player/signin", playerController.signin);
// // Player Routes - Edit / Update
// app.use("/player/edit/:codename", playerController.edit);
// app.use("/player/update", playerController.update);
// // Player Routes - Delete / Remove
// app.use("/player/delete/:codename", playerController.delete);
// app.use("/player/remove", playerController.remove);
// // Player Routes - Logout
// app.use("/player/signout", playerController.signout);
