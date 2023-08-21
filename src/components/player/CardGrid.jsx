// Library Imports
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHourglassStart } from "@fortawesome/free-solid-svg-icons";

// Page & Component Imports
import Card from "./Card";

// Custom Hook Import
import useCountdownTimer from "../../hooks/useCountdownTimer";

function CardGrid({ deck, setDeck, gridWidth, gridDimensions }) {
  const [countdown, mm, ss] = useCountdownTimer({ min: 0, sec: 30 });

  const [flipCount, setFlipCount] = useState(0);

  const [previous, setPrevious] = useState(-1);

  const [score, setScore] = useState(0);
  let personalBest = 0;

  let isLevelComplete = false;

  // Level Failed
  if (countdown === "00:00") {
    Swal.fire({
      title: "Ooops... Sorry.",
      text: "You failed to complete this level.",
    });
  }

  // Card Flipper (Click Handler)
  function cardFlipper(idx) {
    if (previous === -1) {
      setFlipCount(flipCount + 1);

      deck[idx].stat = "shown";

      setDeck([...deck]);
      setPrevious(idx);
    } else {
      cardTagger(idx);
    }
  }

  // Card Tagger (Correct or Wrong)
  function cardTagger(current) {
    if (deck[current].id === deck[previous].id) {
      if (deck[current].type !== deck[previous].type) {
        deck[current].stat = "correct";
        deck[previous].stat = "correct";

        setScore(score + 250);

        setFlipCount(flipCount + 1);

        setDeck([...deck]);

        setPrevious(-1);

        // Determine if the status of all cards are "correct"
        // every() will only return true if all elements of the deck satisfy the conditions on statChecker
        if (deck.every(statChecker)) {
          isLevelComplete = !isLevelComplete;
          console.log(`Is Level Complete?\n${isLevelComplete}`);

          computeFinalScore(mm, ss, score);
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
  }

  // Status Checker (If all cards in the deck has been tagged "Correct")
  const statChecker = (element, index, array) => {
    // Returns true for the First Element
    // This will serve as the Point of Comparison
    if (index === 0) {
      return true;
    } else {
      // Returns true if the Status of the Current Element is equal to the Status of the Previous Element
      return element.stat === array[index - 1].stat;
    }
  };

  // Compute Final Score
  const computeFinalScore = (min, sec, score) => {
    let totalTimeRemaining = min * 60 + sec;
    console.log(`Remaining minutes: ${min}`);
    console.log(`Remaining seconds: ${sec}`);

    let currentScore = score + 250;

    let timeBonus = totalTimeRemaining * 50;
    console.log(`Time Bonus: ${timeBonus}`);

    console.log(`Current Score: ${currentScore}`);

    let totalScore = currentScore + timeBonus;
    console.log(`Total Score: ${totalScore}`);

    if (totalScore > personalBest) {
      personalBest = totalScore;
      console.log(`Personal Best: ${personalBest}`);
    } else {
      console.log(`Personal Best: ${personalBest}`);
    }

    Swal.fire({
      icon: "success",
      title: "Congratulations!",
      text: "You have completed this level.",
      timer: 3500,
    });
  };

  return (
    <div>
      <div
        className="d-flex justify-content-evenly mx-auto"
        style={{ width: gridWidth }}>
        {/* <p
            id="lblFlipCounter"
            className="rounded border border-3 border-warning px-3">
            <FontAwesomeIcon icon={faRightLeft} />
            &nbsp;
            <span id="valFlipCounter">{flipCount}</span>
          </p> */}

        <div className="divMechanics bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faStar} />
            &nbsp;&nbsp;
            <span className="trackers">{score}</span>
          </p>
        </div>

        <div className="divMechanics bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faHourglassStart} />
            &nbsp;&nbsp;
            <span className="trackers">{countdown}</span>
          </p>
        </div>
      </div>

      <div
        className={"divCardGrid " + gridDimensions}
        style={{ width: gridWidth }}>
        {deck.map((card, index) => (
          <Card
            key={index}
            cardID={index}
            cardImage={card.img}
            cardStatus={card.stat}
            cardFlipper={cardFlipper}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
