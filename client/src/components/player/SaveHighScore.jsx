import React from "react";
import { Link } from "react-router-dom";

const SaveHighScore = ({ currentSession }) => {
  const {
    playerID,
    playerName,
    playerCodename,
    playerEmail,
    playerTotalScore,
    playerHighScore,
  } = currentSession;

  const restartGame = () => {
    localStorage.removeItem("currentSession");
    window.location.reload();
  };

  return (
    <div
      id="divSaveHighScore"
      className="d-flex flex-column justify-content-start align-items-center text-warning">
      <h1 className="mb-4">Thank you for playing our game</h1>

      <div id="cardSaveHighScore" className="card bg-warning py-3">
        {playerID === 1111 ? (
          <div>
            <p>Total Score: {playerTotalScore}</p>
            <p>High Score: {playerHighScore}</p>

            <Link to={"/SignInPlayer"} className="btn btn-warning">
              Save High Score
            </Link>
          </div>
        ) : (
          <form
            id="frmSaveHighScore"
            action="http://localhost:4000/player/savehighscore"
            method="POST">
            <fieldset className="container-fluid">
              <div className="row w-100 m-0 p-0">
                <div className="col-4 text-start">
                  <label htmlFor="player_id" className="lblSaveHighScore">
                    Player ID:
                  </label>
                </div>

                <div className="col-8">
                  <input
                    type="text"
                    id="player_id"
                    name="player_id"
                    className="fldSaveHighScore form-control"
                    readOnly
                    value={playerID}
                  />
                </div>
              </div>

              <div className="row w-100 m-0 p-0">
                <div className="col-4 text-start">
                  <label htmlFor="player_name" className="lblSaveHighScore">
                    Full Name:
                  </label>
                </div>

                <div className="col-8">
                  <input
                    type="text"
                    id="player_name"
                    name="player_name"
                    className="fldSaveHighScore form-control"
                    readOnly
                    value={playerName}
                  />
                </div>
              </div>

              <div className="row w-100 m-0 p-0">
                <div className="col-4 text-start">
                  <label
                    htmlFor="player_code_name"
                    className="lblSaveHighScore">
                    Code Name:
                  </label>
                </div>

                <div className="col-8">
                  <input
                    type="text"
                    id="player_code_name"
                    name="player_code_name"
                    className="fldSaveHighScore form-control"
                    readOnly
                    value={playerCodename}
                  />
                </div>
              </div>

              <div className="row w-100 m-0 p-0">
                <div className="col-4 text-start">
                  <label htmlFor="player_email" className="lblSaveHighScore">
                    Email:
                  </label>
                </div>

                <div className="col-8">
                  <input
                    type="email"
                    id="player_email"
                    name="player_email"
                    className="fldSaveHighScore form-control"
                    readOnly
                    value={playerEmail}
                  />
                </div>
              </div>

              <div className="row w-100 m-0 p-0">
                <div className="col-4 text-start">
                  <label
                    htmlFor="player_total_score"
                    className="lblSaveHighScore">
                    Total Score:
                  </label>
                </div>

                <div className="col-8">
                  <input
                    type="number"
                    id="player_total_score"
                    name="player_total_score"
                    className="fldSaveHighScore form-control"
                    readOnly
                    value={playerTotalScore}
                  />
                </div>
              </div>

              <div className="row w-100 m-0 p-0">
                <div className="col-4 text-start">
                  <label
                    htmlFor="player_high_score"
                    className="lblSaveHighScore">
                    HighScore:
                  </label>
                </div>

                <div className="col-8">
                  <input
                    type="number"
                    id="player_high_score"
                    name="player_high_score"
                    className="fldSaveHighScore form-control"
                    readOnly
                    value={playerHighScore}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-evenly">
                <button
                  type="submit"
                  id="btnSaveHighScore"
                  className="btn px-3 mx-3">
                  Save High Score
                </button>

                <button
                  type="button"
                  id="btnRestartGame"
                  className="btn btn-warning px-3 mx-3"
                  onClick={restartGame}>
                  Restart Game
                </button>
              </div>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default SaveHighScore;
