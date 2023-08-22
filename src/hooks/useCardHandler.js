import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PlayerSessionContext } from "../contexts/PlayerSessionContext";

const useCardHandler = ({ min, sec }) => {
  const { playerSession, setPlayerSession } = useContext(PlayerSessionContext);

  const [previous, setPrevious] = useState(-1);
  const [flipCount, setFlipCount] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [personalBest, setPersonalBest] = useState(score);
  const [isLevelComplete, setIsLevelComplete] = useState(false);

  let highScore = 0;

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
    let currentScore = score + 250;

    let totalTimeRemaining = min * 60 + sec;
    let timeBonus = totalTimeRemaining * 50;

    let totalScore = currentScore + timeBonus;

    if (totalScore > highScore) {
      highScore = totalScore;
    }

    console.log(`Remaining Minutes: ${min}`);
    console.log(`Remaining Seconds: ${sec}`);
    console.log(`Time Bonus: ${timeBonus}\n+`);
    console.log(`Current Score: ${currentScore}\n===`);
    console.log(`Total Score: ${totalScore}`);
    console.log(`Personal Best: ${highScore}`);

    let updatedPlayerSession = {
      playerID: playerSession[0].playerID,
      playerName: playerSession[0].playerName,
      playerCodename: playerSession[0].playerCodename,
      playerEmail: playerSession[0].playerEmail,
      playerCurrentScore: 0,
      playerTotalScore: totalScore,
      playerHighScore: highScore,
      playerLevel: playerSession[0].playerLevel + 1,
      playerGridDimensions: "grid4x4",
    };

    setPlayerSession([updatedPlayerSession]);

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
    isLevelComplete,
    setIsLevelComplete,
    statChecker,
    computeFinalScore,
  ];
};

export default useCardHandler;
