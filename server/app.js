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

// Confiigure the Express Server to Listen to the specified Port
app
  .listen(port, () => {
    console.log(`\nServer successfully started at http://localhost:${port}\n`);
  })
  .on("error", (error) => {
    console.log(`\nServer failed to start at Port ${port}\n${error.message}\n`);
  });

// Routes
app.use("/", require("./routes/index.js"));
// app.use("/admin", require("./routes/adminRoutes.js"));
// app.use("/player", require("./routes/playerRoutes.js"));

const playerController = require("./controllers/playerController.js");

app.use("/player/signup", playerController.signup);

// const router = express.Router();

// // Player Sign In / Sign Up
// router.post("/signup", playerController.signup);
// router.post("/signin", playerController.signin);

// // Player Edit / Update
// router.get("/edit/:codename", playerController.edit);
// router.post("/update", playerController.update);

// // Player Delete / Remove
// router.get("/delete/:codename", playerController.delete);
// router.post("/remove", playerController.remove);

// // Player Logout
// router.get("/signout", playerController.signout);
