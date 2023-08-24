const express = require("express");
const dotenv = require("dotenv");
const cookie_parser = require("cookie-parser");

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

// Confiigure the Express Server to Listen to the specified Port
app
  .listen(port, () => {
    console.log(`\nServer successfully started at http://localhost:${port}`);
  })
  .on("error", (error) => {
    console.log(`\nServer failed to start at Port ${port}\n${error.message}\n`);
  });

// Routes
app.use("/", require("./routes/index.js"));
// app.use("/admin", require("./routes/adminRoutes.js"));
// app.use("/player", require("./routes/playerRoutes.js"));
