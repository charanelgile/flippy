// Library Imports
import React from "react";

// Custom Hook Import
import useLetsBegin from "../../hooks/useLetsBegin";

// Page & Component Imports
import Cards3x4 from "./Cards3x4";
import Cards4x4 from "./Cards4x4";
import Cards4x5 from "./Cards4x5";

const StartGame = ({ gridDimensions, currentLevel, setCurrentLevel }) => {
  const [deck, setDeck, startGame, dimensions] = useLetsBegin({
    dimensions: gridDimensions,
  });

  return (
    <div>
      {deck.length === 0 ? (
        <div
          id="containerStartGame"
          className="d-flex justify-content-center align-items-center">
          <button className="btnStartGame btn btn-warning" onClick={startGame}>
            <p className="m-0 py-1 px-3 border border-3 rounded">Start Game</p>
            <small>Level {currentLevel}</small>
          </button>
        </div>
      ) : dimensions === "grid3x4" ? (
        <div id="containerCardGrid">
          <Cards3x4 deck={deck} setDeck={setDeck} dimensions={dimensions} />
        </div>
      ) : dimensions === "grid4x4" ? (
        <div id="containerCardGrid">
          <Cards4x4 deck={deck} setDeck={setDeck} dimensions={dimensions} />
        </div>
      ) : (
        <div id="containerCardGrid">
          <Cards4x5 deck={deck} setDeck={setDeck} dimensions={dimensions} />
        </div>
      )}
    </div>
  );
};

export default StartGame;
