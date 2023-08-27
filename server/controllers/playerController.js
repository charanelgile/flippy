const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

// Player Sign Up
exports.signup = (req, res) => {
  try {
    const {
      player_first_name,
      player_last_name,
      player_code_name,
      player_email,
      player_password,
      player_confirm_password,
    } = req.body;

    if (
      player_first_name === "" ||
      player_last_name === "" ||
      player_code_name === "" ||
      player_email === "" ||
      player_password === ""
    ) {
      return res.render("playerSignUp.hbs", {
        messageError: "All fields are required",
        category:
          "divErrorMessage container-fluid d-flex justify-content-between align-items-center alert alert-danger my-4 me-4",
      });
    } else if (player_confirm_password !== player_password) {
      return res.render("playerSignUp.hbs", {
        messageError: "Passwords did not match",
        category:
          "divErrorMessage container-fluid d-flex justify-content-between align-items-center alert alert-danger my-4 me-4",
      });
    }

    db.query(
      "SELECT * FROM players WHERE player_email = ?",
      player_email,
      (error, results) => {
        // console.log(results);

        if (error) {
          console.log(`\n${error.message}\n`);
        }

        if (results.length > 0) {
          return res.render("playerSignUp.hbs", {
            messageError: "Email already existing",
            category:
              "divErrorMessage container-fluid d-flex justify-content-between align-items-center alert alert-danger my-4 me-4",
          });
        }

        db.query(
          "SELECT * FROM players WHERE player_code_name = ?",
          player_code_name,
          async (error, results) => {
            // console.log(results);

            if (error) {
              console.log(`\n${error.message}\n`);
            }

            if (results.length > 0) {
              return res.render("playerSignUp.hbs", {
                messageError: "Code Name already taken",
                category:
                  "divErrorMessage container-fluid d-flex justify-content-between align-items-center alert alert-danger my-4 me-4",
              });
            }

            // // Separate every word on the first name and capitalize each beginning letter
            // let first_name = player_first_name.trim().split(" ");
            // for (let ctr = 0; ctr < first_name.length; ctr++) {
            //   first_name[ctr] =
            //     first_name[ctr].charAt(0).toUpperCase() +
            //     first_name[ctr].slice(1).toLowerCase();
            // }

            // // Join the first name back into 1 string
            // first_name.join(" ").toString();

            // // Separate every word on the last name and capitalize each beginning letter
            // let last_name = player_last_name.trim().split(" ");
            // for (let ctr = 0; ctr < last_name.length; ctr++) {
            //   last_name[ctr] =
            //     last_name[ctr].charAt(0).toUpperCase() +
            //     last_name[ctr].slice(1).toLowerCase();
            // }

            // // Join the last name back into 1 string
            // last_name.join(" ").toString();

            let uppercaseFirstName = player_first_name.trim().toUpperCase();

            let uppercaseLastName = player_last_name.trim().toUpperCase();

            let lowercaseCodeName = player_code_name.trim().toLowerCase();

            let lowercaseEmail = player_email.trim().toLowerCase();

            let encryptedPassword = await bcrypt.hash(player_password, 8);
            // console.log(encryptedPassword);

            db.query(
              "INSERT INTO players SET ?",
              {
                player_first_name: uppercaseFirstName,
                player_last_name: uppercaseLastName,
                player_code_name: lowercaseCodeName,
                player_email: lowercaseEmail,
                player_password: encryptedPassword,
              },
              (error, results) => {
                if (error) {
                  console.log(`\n${error.message}\n`);
                } else {
                  // console.log(results);

                  return res.render("playerSignIn.hbs", {
                    messageSuccess: "Account created successfully",
                    category:
                      "divSuccessMessage container-fluid d-flex justify-content-between align-items-center alert alert-success my-4 me-4",
                  });
                }
              }
            );
          }
        );
      }
    );
  } catch (error) {
    console.log(`\n${error.message}\n`);
  }
};

// Player Sign In
exports.signin = (req, res) => {
  try {
    const { player_code_name, player_password } = req.body;

    if (player_code_name === "" || player_password === "") {
      return res.render("playerSignIn.hbs", {
        messageError: "All fields are required",
        category:
          "divErrorMessage container-fluid d-flex justify-content-between align-items-center alert alert-danger my-4 me-4",
      });
    } else {
      db.query(
        "SELECT * FROM players WHERE player_code_name = ?",
        player_code_name,
        async (error, results) => {
          // console.log(results);

          if (!results.length > 0) {
            return res.render("playerSignIn.hbs", {
              messageError: "Code Name does not exist",
              category:
                "divErrorMessage container-fluid d-flex justify-content-between align-items-center alert alert-danger my-4 me-4",
            });
          } else if (
            !(await bcrypt.compare(player_password, results[0].player_password))
          ) {
            return res.render("playerSignIn.hbs", {
              messageError: "Incorrect Password",
              category:
                "divErrorMessage container-fluid d-flex justify-content-between align-items-center alert alert-danger my-4 me-4",
            });
          } else {
            const player_id = results[0].player_id;

            const token = jwt.sign({ player_id }, process.env.JWTSECRET, {
              expiresIn: process.env.JWTEXPIRE,
            });

            const cookieOptions = {
              expires: new Date(
                Date.now() + process.env.COOKIEEXPIRE * 24 * 60 * 60 * 1000
              ),
              httpOnly: true,
            };

            // console.log(player_id);
            // console.log(token);
            // console.log(cookieOptions);

            res.cookie("Flippy", token, cookieOptions);

            db.query(
              "SELECT * FROM players WHERE player_code_name = ?",
              player_code_name,
              (error, results) => {
                console.log(results);

                return res.render("playerProfile.hbs", {
                  playerProfile: results,
                  messageSuccess: "Sign in successful",
                  category:
                    "divSuccessMessage container-fluid d-flex justify-content-between align-items-center alert alert-success my-4 me-4",
                  navMenuOption: player_code_name,
                  navMenuLink: "http://localhost:3000/",
                });
              }
            );
          }
        }
      );
    }
  } catch (error) {
    console.log(`\n${error.message}\n`);
  }
};

// Player Sign Out
exports.signout = (req, res) => {
  res.clearCookie("Flippy").status(200);

  return res.render("playerSignIn.hbs", {
    messageSuccess: "Sign out successful",
    category:
      "divSuccessMessage container-fluid d-flex justify-content-between align-items-center alert alert-success my-4 me-4",
  });
};

// Player Ranking
exports.ranking = (req, res) => {
  try {
    const { player_code_name } = req.params.player_code_name;

    if (player_code_name === "") {
      db.query(
        "SELECT player_code_name, player_high_score FROM players",
        (error, results) => {
          // console.log(results);

          return res.render("playerRanking.hbs");
        }
      );
    } else {
      db.query("SELECT player_code_name, player_high_score FROM players");
    }
  } catch (error) {
    console.log(`\n${error.message}\n`);
  }
};
