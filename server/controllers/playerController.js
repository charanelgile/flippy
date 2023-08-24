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

    db.query(
      "SELECT * FROM players WHERE player_email = ?",
      player_email,
      (error, results) => {
        // console.log(results);

        if (error) {
          console.log(`\n${error.message}\n`);
        }

        if (results.length > 0) {
          res.send(
            "<div className='alert alert-danger text-center'>Email already existing</div>"
          );
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
              res.send(
                "<div className='alert alert-danger text-center'>Code Name already taken</div>"
              );
            } else if (player_password !== player_confirm_password) {
              res.send(
                "<div className='alert alert-danger text-center'>Passwords did not match</div>"
              );
            }

            let encryptedPassword = await bcrypt.hash(player_password, 8);
            // console.log(encryptedPassword);

            db.query(
              "INSERT INTO players SET ?",
              {
                player_first_name,
                player_last_name,
                player_code_name,
                player_email,
                player_password: encryptedPassword,
              },
              (error, results) => {
                if (error) {
                  console.log(`\n${error.message}\n`);
                } else {
                  // console.log(results);

                  return res.send(
                    "<div className='alert alert-success text-center'>Account successfully created</div>"
                  );
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
