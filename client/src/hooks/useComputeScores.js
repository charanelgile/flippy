import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
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

  let goToRanking = useNavigate();

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

    // console.log(`Remaining Seconds: ${sec}`);
    // console.log(`Remaining Minutes: ${min}`);
    // console.log(`Total Time Remaining (in Seconds):\n${totalTimeRemaining}`);

    // console.log(`Time Bonus: ${timeBonus} +`);
    // console.log(`Current Score: ${currentScoreToStore}\n===================`);

    // console.log(`Final Score: ${totalScoreToStore}`);

    // console.log(`Personal Best: ${highScoreToStore}`);

    Swal.fire({
      icon: "success",
      iconColor: "rgb(225, 155, 10)",
      title: `&#127881&#127881&#127881<br/>Congratulations`,
      text: `You completed Level ${currentSession[0].playerLevel} with a score of ${totalScoreToStore}.`,
      width: 650,
      confirmButtonText: `<i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Next Level`,
      showDenyButton: true,
      denyButtonText: `<i class="fa-solid fa-repeat"></i>&nbsp;&nbsp;Retry`,
      showCancelButton: true,
      cancelButtonText: `<i class="fa-solid fa-trophy"></i>&nbsp;&nbsp;Ranking`,
    }).then((result) => {
      if (result.isConfirmed) {
        currentSession[0].playerGridDimensions.shift();

        setCurrentSession(playerProgress);

        window.location.reload();
      } else if (result.isDenied) {
        window.location.reload();
      } else {
        currentSession[0].playerGridDimensions.shift();

        setCurrentSession(playerProgress);

        goToRanking("/Ranking");
        window.location.reload();
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
