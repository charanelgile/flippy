// Library Imports
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faRightLeft,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";

const Mechanics = ({ isMechanicsShown, setIsMechanicsShown }) => {
  console.log(`From Mechanics: ${isMechanicsShown}`);

  const closeMechanics = () => {
    setIsMechanicsShown(!isMechanicsShown);
  };

  return (
    <div className="text-white text-start">
      <h1 className="text-warning">Before we start...</h1>

      <h3>Just a quick introduction and mechanics:</h3>

      <div className="fs-5">
        <div className="d-flex justify-content-start align-items-center w-75 mb-3">
          <div className="divTrackers bg-warning me-3">
            <p className="m-0 px-3 border border-3 rounded">
              <FontAwesomeIcon icon={faRightLeft} />
              &nbsp;&nbsp;
              <span className="trackers">0</span>
            </p>
          </div>

          <p className=" m-0">
            The Flip icon represents your Current Score.
            <br />
            The scores you gained only for the current level you're
            playing. This resets to 0 after every level.
          </p>
        </div>

        <p className="text-warning">
          Every pair of cards you match is equivalent to 250 points.
        </p>

        <div className="d-flex justify-content-start align-items-center w-75 mb-3">
          <div className="divTrackers bg-warning me-3">
            <p className="m-0 px-3 border border-3 rounded">
              <FontAwesomeIcon icon={faStar} />
              &nbsp;&nbsp;
              <span className="trackers">0</span>
            </p>
          </div>

          <p className=" m-0">
            This on the other hand, is your Total Score.
            <br />
            The sum total of the scores you gained from all the levels you
            have completed, including{" "}
            <span className="text-warning fst-italic">"Bonus Points"</span>
            .
          </p>
        </div>

        <p className="text-warning">
          When you complete a level, the remaining time is converted into
          Bonus Points equivalent to 50 points per second.
          <br />
          The faster you complete a level, the more Bonus Points you get.
        </p>

        <div className="d-flex justify-content-start align-items-center w-75 mb-3">
          <div className="divTrackers bg-warning me-3 last10seconds">
            <p
              className="m-0 px-3 border border-3 rounded"
              id="last10seconds">
              <FontAwesomeIcon icon={faHourglassEnd} />
              &nbsp;&nbsp;
              <span className="trackers last10seconds">00:10</span>
            </p>
          </div>

          <p className=" m-0">
            This of course, is the Countdown Timer. Every level has its own
            time limit.
            <br />
            The indicator will turn red like this, once the timer hits{" "}
            <span className="text-warning">10 seconds and below.</span>
          </p>
        </div>
      </div>

      <Link
        to={"/"}
        className="btn btn-success fs-4 px-3"
        onClick={closeMechanics}>
        Got it
      </Link>
    </div>
  );
};

export default Mechanics;
