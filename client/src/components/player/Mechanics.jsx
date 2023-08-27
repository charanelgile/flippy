// Library Imports
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faRightLeft,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";

const Mechanics = () => {
  return (
    <div id="containerMechanics" className="text-start rounded">
      <h1 className="text-warning m-0">Before we start...</h1>

      <h3 className="mb-4">Let's go over some details and mechanics</h3>

      <div className="fs-5">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="d-flex flex-column justify-content-start align-items-start text-start me-3">
            <div className="divTrackers bg-warning mb-2">
              <p className="m-0 px-3 border border-3 rounded">
                <FontAwesomeIcon icon={faRightLeft} />
                &nbsp;&nbsp;
                <span className="trackers">250</span>
              </p>
            </div>

            <div>
              <p className="textMechanics m-0">
                The Flip Icon represents your{" "}
                <span className="highlightedText">Current Score.</span> The
                scores you gained only for the current level you're playing.
                This resets to 0 after every level. Every pair of cards you
                match is equivalent to{" "}
                <span className="textPoints">250 points.</span>
              </p>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-start align-items-start text-start">
            <div className="divTrackers bg-warning mb-2">
              <p className="m-0 px-3 border border-3 rounded">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;&nbsp;
                <span className="trackers">1500</span>
              </p>
            </div>

            <div>
              <p className="textMechanics m-0">
                This on the other hand, is your{" "}
                <span className="highlightedText">Total Score.</span> The sum
                total of the scores you gained from all the levels you have
                completed, including{" "}
                <span className="highlightedText fst-italic">
                  "Bonus Points"
                </span>
                . When you complete a level, the remaining time is converted
                into <span className="textPoints">Bonus Points</span> equivalent
                to <span className="textPoints">50 points per second.</span> The
                faster you complete a level, the more Bonus Points you get.
              </p>
            </div>
          </div>
        </div>

        <div className="divMechanics d-flex justify-content-start align-items-center text-start mb-3">
          <div className="divTrackers me-3 last10seconds">
            <p className="m-0 px-3 border border-3 rounded" id="last10seconds">
              <FontAwesomeIcon icon={faHourglassEnd} />
              &nbsp;&nbsp;
              <span className="trackers last10seconds">00:10</span>
            </p>
          </div>

          <p className="textMechanics m-0">
            This of course, is the Countdown Timer. Every level has its own time
            limit.
            <br />
            The indicator will turn <span className="textRed">red</span> like
            this, once the timer hits{" "}
            <span className="highlightedText">10 seconds and below.</span>
          </p>
        </div>
      </div>

      <div className="w-100 text-center">
        <Link to={"/Play"} className="btn fs-4 mb-3 py-1 px-3">
          Got it
        </Link>
      </div>
    </div>
  );
};

export default Mechanics;
