import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useCardHandler = ({ min, sec }) => {
  const [previous, setPrevious] = useState(-1);
  const [flipCount, setFlipCount] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [personalBest, setPersonalBest] = useState(score);
  const [isLevelComplete, setIsLevelComplete] = useState(false);

  let goToNextLevel = useNavigate();

  let carriedData = [];
  let testData = {};

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
  const computeFinalScore = () => {
    let totalTimeRemaining = min * 60 + sec;

    let currentScore = score + 250;

    let timeBonus = totalTimeRemaining * 50;

    let totalScore = currentScore + timeBonus;
    let personalBest = currentScore;

    if (totalScore > personalBest) {
      personalBest = totalScore;
    }

    console.log(`Remaining Minutes: ${min}`);
    console.log(`Remaining Seconds: ${sec}`);
    console.log(`Time Bonus: ${timeBonus}\n+`);
    console.log(`Current Score: ${currentScore}\n===`);
    console.log(`Total Score: ${totalScore}`);
    console.log(`Personal Best: ${personalBest}`);

    // testData = {
    //   totalScore,
    //   personalBest,
    //   min,
    //   sec,
    // };

    // carriedData.push(testData);

    // console.log(carriedData);

    Swal.fire({
      title: "Congratulations",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Next Level",
      denyButtonText: "Retry",
      cancelButtonText: "Ranking",
    }).then((result) => {
      if (result.isConfirmed) {
        goToNextLevel(
          "/Level" + JSON.parse(localStorage.getItem("currentLevel"))
          // {
          //   state: carriedData,
          // }
        );
      } else if (result.isDenied) {
        Swal.fire("Retry Level", "", "info");
      } else {
        Swal.fire("This should go to the Ranking", "", "warning");
      }
    });
  };

  // Return Items for Consumption
  return [
    previous,
    setPrevious,
    flipCount,
    setFlipCount,
    score,
    setScore,
    totalScore,
    setTotalScore,
    personalBest,
    isLevelComplete,
    setIsLevelComplete,
    statChecker,
    computeFinalScore,
  ];
};

export default useCardHandler;
