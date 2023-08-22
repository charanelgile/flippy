import React from "react";
import Card from "./Card";
import Swal from "sweetalert2";
import useCountdownTimer from "../../hooks/useCountdownTimer";
import useComputeScores from "../useComputeScores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faTrophy,
  faStar,
  faRightLeft,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

const Cards3x4 = ({ deck, setDeck, dimensions }) => {
  const [countdown, mm, ss] = useCountdownTimer({ min: 0, sec: 30 });

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
        {/* <div className="divMechanics bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faTrophy} />
            &nbsp;&nbsp;
            <span className="trackers">{highScore}</span>
          </p>
        </div> */}

        <div className="divMechanics bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faStar} />
            &nbsp;&nbsp;
            <span className="trackers">{totalScore}</span>
          </p>
        </div>

        <div className="divMechanics bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faRightLeft} />
            &nbsp;&nbsp;
            <span className="trackers">{currentScore}</span>
          </p>
        </div>

        <div className="divMechanics bg-warning mb-3">
          <p
            className={
              mm === 0 && ss < 11
                ? "m-0 px-3 border border-3 rounded text-danger"
                : "m-0 px-3 border border-3 rounded"
            }>
            <FontAwesomeIcon icon={faHourglassStart} />
            &nbsp;&nbsp;
            <span
              className={
                mm === 0 && ss < 11 ? "trackers text-danger" : "trackers"
              }>
              {countdown}
            </span>
          </p>
        </div>
      </div>

      <div id="divCardGrid3x4" className={"divCardGrid " + dimensions}>
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

export default Cards3x4;
