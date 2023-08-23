// Library Imports
import React from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faTrophy,
  faStar,
  faRightLeft,
  faHourglassEnd,
  faHourglassStart,
  faHourglassEmpty,
} from "@fortawesome/free-solid-svg-icons";

// Custom Hook Imports
import useComputeScores from "../../hooks/useComputeScores";
import useCountdownTimer from "../../hooks/useCountdownTimer";

// Page & Component Import
import Card from "./Card";

const CardsGrid = ({ minutes, seconds, deck, setDeck, dimensions }) => {
  const [countdown, mm, ss] = useCountdownTimer({ min: minutes, sec: seconds });

  const [
    previous,
    setPrevious,
    flipCount,
    setFlipCount,
    isLevelComplete,
    setIsLevelComplete,
    currentScore,
    setCurrentScore,
    totalScore,
    setTotalScore,
    highScore,
    setHighScore,
    statChecker,
    computeScores,
  ] = useComputeScores({
    min: mm,
    sec: ss,
  });

  // Card Flipper
  const cardFlipper = (index) => {
    if (previous === -1) {
      setFlipCount(flipCount + 1);

      deck[index].stat = "shown";

      setDeck([...deck]);
      setPrevious(index);
    } else {
      cardTagger(index);
    }
  };

  // Card Tagger (Correct or Wrong)
  const cardTagger = (current) => {
    if (deck[current].id === deck[previous].id) {
      if (deck[current].type !== deck[previous].type) {
        deck[current].stat = "correct";
        deck[previous].stat = "correct";

        setCurrentScore(currentScore + 250);

        setTotalScore(totalScore + 250);

        if (totalScore > highScore) {
          setHighScore(totalScore);
        }

        setFlipCount(flipCount + 1);

        setDeck([...deck]);

        setPrevious(-1);

        // Determine if the status of all cards are "correct"
        // every() will only return true if all elements of the deck satisfy the conditions on statChecker
        if (deck.every(statChecker)) {
          setIsLevelComplete(!isLevelComplete);
          computeScores(mm, ss);

          // Empty the deck again to render the Start Game Button
          // and not go straight to the Next Level
          setDeck([]);
        }
      }
    } else {
      deck[current].stat = "wrong";
      deck[previous].stat = "wrong";

      setFlipCount(flipCount + 1);

      // Update the value of the State Variable for the Animation to Kick In
      setDeck([...deck]);

      setTimeout(() => {
        deck[current].stat = "";
        deck[previous].stat = "";

        setDeck([...deck]);
        setPrevious(-1);
      }, 500);
    }
  };

  // Level Failed
  if (countdown === "00:00" && isLevelComplete === false) {
    Swal.fire({
      title: "Game Over",
      text: "You failed to complete this level.",
    });
  }

  return (
    <div>
      <div className="d-flex justify-content-evenly mx-auto">
        {/* <div className="divTrackers bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faTrophy} />
            &nbsp;&nbsp;
            <span className="trackers">{highScore}</span>
          </p>
        </div> */}

        <div className="divTrackers bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faStar} />
            &nbsp;&nbsp;
            <span className="trackers">{totalScore}</span>
          </p>
        </div>

        <div className="divTrackers bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faRightLeft} />
            &nbsp;&nbsp;
            <span className="trackers">{currentScore}</span>
          </p>
        </div>

        <div
          className={
            mm === 0 && ss <= 9
              ? "divTrackers bg-warning mb-3 last10seconds"
              : "divTrackers bg-warning mb-3"
          }>
          <p
            id={mm === 0 && ss <= 9 ? "last10seconds" : ""}
            className="m-0 px-3 border border-3 rounded">
            {countdown === "00:00" ? (
              <FontAwesomeIcon icon={faHourglassEmpty} />
            ) : mm === 0 && ss <= 9 ? (
              <FontAwesomeIcon icon={faHourglassEnd} />
            ) : (
              <FontAwesomeIcon icon={faHourglassStart} />
            )}
            &nbsp;&nbsp;
            <span
              className={
                mm === 0 && ss <= 9 ? "trackers last10seconds" : "trackers"
              }>
              {countdown}
            </span>
          </p>
        </div>
      </div>

      <div
        id="divCardGrid3x4"
        className={
          countdown === "00:00"
            ? "divCardGrid " + dimensions + " gameOver"
            : "divCardGrid " + dimensions
        }>
        {deck.map((card, index) => (
          <Card
            key={index}
            cardIndex={index}
            cardImage={card.img}
            cardStatus={card.stat}
            cardFlipper={cardFlipper}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
