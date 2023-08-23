import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CurrentSessionContext } from "../contexts/CurrentSessionContext";

const useComputeScores = ({ min, sec }) => {
  const { currentSession, setCurrentSession } = useContext(
    CurrentSessionContext
  );

  const [previous, setPrevious] = useState(-1);
  const [flipCount, setFlipCount] = useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false);

  const [currentScore, setCurrentScore] = useState(0);

  const [totalScore, setTotalScore] = useState(
    currentSession[0].playerTotalScore
  );

  const [highScore, setHighScore] = useState(currentSession[0].playerHighScore);

  let highScoreToStore = currentSession[0].playerHighScore;

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

  // Compute Scores
  const computeScores = () => {
    let currentScoreToStore = totalScore + 250;

    let totalTimeRemaining = min * 60 + sec;
    let timeBonus = totalTimeRemaining * 50;

    let totalScoreToStore = currentScoreToStore + timeBonus;

    setTotalScore(totalScoreToStore);

    if (totalScoreToStore > highScoreToStore) {
      highScoreToStore = totalScoreToStore;
      setHighScore(totalScoreToStore);
    }

    console.log(`Remaining Seconds: ${sec}`);
    console.log(`Remaining Minutes: ${min}`);
    console.log(`Total Time Remaining (in Seconds):\n${totalTimeRemaining}`);

    console.log(`Time Bonus: ${timeBonus} +`);
    console.log(`Current Score: ${currentScoreToStore}\n===================`);

    console.log(`Final Score: ${totalScoreToStore}`);

    console.log(`Personal Best: ${highScoreToStore}`);

    currentSession[0].playerGridDimensions.shift();

    const playerProgress = [
      {
        playerID: currentSession[0].playerID,
        playerName: currentSession[0].playerName,
        playerCodename: currentSession[0].playerCodename,
        playerEmail: currentSession[0].playerEmail,
        playerTotalScore: totalScoreToStore,
        playerHighScore: highScoreToStore,
        playerLevel: currentSession[0].playerLevel + 1,
        playerGridDimensions: currentSession[0].playerGridDimensions,
      },
    ];

    setCurrentSession(playerProgress);

    Swal.fire({
      title: "Congratulations",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Next Level",
      denyButtonText: "Retry",
      cancelButtonText: "Ranking",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Go to Next Level", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Retry Level", "", "info");
      } else {
        Swal.fire("This should go to the Ranking", "", "warning");
      }
    });
  };

  // Return Items for Consumption of Components
  return [
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
  ];
};

export default useComputeScores;
