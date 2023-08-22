// Library Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faStar,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

// Page & Component Imports
import Card from "./Card";

// Custom Hook Import
import useCountdownTimer from "../../hooks/useCountdownTimer";
import useCardHandler from "../../hooks/useCardHandler";

function Cards3x4({ level, dimensions, deck, setDeck }) {
  const [countdown, mm, ss] = useCountdownTimer({ min: 0, sec: 30 });

  const [
    previous,
    setPrevious,
    flipCount,
    setFlipCount,
    score,
    setScore,
    totalScore,
    isLevelComplete,
    setIsLevelComplete,
    statChecker,
    computeFinalScore,
  ] = useCardHandler({ min: mm, sec: ss });

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
        // setTotalScore(score + 250);

        // console.log(totalScore);

        setFlipCount(flipCount + 1);

        setDeck([...deck]);

        setPrevious(-1);

        // Determine if the status of all cards are "correct"
        // every() will only return true if all elements of the deck satisfy the conditions on statChecker
        if (deck.every(statChecker)) {
          setIsLevelComplete(!isLevelComplete);
          // setCurrentLevel(currentLevel + 1);
          computeFinalScore(mm, ss);
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
  // const statChecker = (element, index, array) => {
  //   // Returns true for the First Element
  //   // This will serve as the Point of Comparison
  //   if (index === 0) {
  //     return true;
  //   } else {
  //     // Returns true if the Status of the Current Element is equal to the Status of the Previous Element
  //     return element.stat === array[index - 1].stat;
  //   }
  // };

  // Level Failed
  if (countdown === "00:00" && isLevelComplete === false) {
    Swal.fire({
      title: "Game Over",
      text: "You failed to complete this level.",
    });
  }

  // Compute Final Score
  // const computeFinalScore = (min, sec, score) => {
  //   let totalTimeRemaining = min * 60 + sec;
  //   console.log(`Remaining minutes: ${min}`);
  //   console.log(`Remaining seconds: ${sec}`);

  //   let currentScore = score + 250;

  //   let timeBonus = totalTimeRemaining * 50;
  //   console.log(`Time Bonus: ${timeBonus}`);

  //   console.log(`Current Score: ${currentScore}`);

  //   let totalScore = currentScore + timeBonus;
  //   console.log(`Total Score: ${totalScore}`);

  //   if (totalScore > personalBest) {
  //     setPersonalBest(totalScore);
  //   }

  //   Swal.fire({
  //     title: "Congratulations",
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: "Next Level",
  //     denyButtonText: "Retry",
  //     cancelButtonText: "Ranking",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       goToNextLevel(`/Level${currentLevel}`);
  //     } else if (result.isDenied) {
  //       Swal.fire("Retry Level", "", "info");
  //     } else {
  //       Swal.fire("This should go to the Ranking", "", "warning");
  //     }
  //   });

  //   completeLevel();
  // };

  // const completeLevel = () => {
  //   console.log("Level Completed!");
  // };

  return (
    <div>
      <div className="d-flex justify-content-evenly mx-auto">
        <div className="divMechanics bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faAward} />
            &nbsp;&nbsp;
            <span className="trackers">{totalScore}</span>
          </p>
        </div>

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
}

export default Cards3x4;
