// Library Imports
import React from "react";

// Custom Hook Import
import useLetsBegin from "../../hooks/useLetsBegin";

// Page & Component Imports
import Cards3x4 from "./Cards3x4";
import Cards4x4 from "./Cards4x4";
import Cards4x5 from "./Cards4x5";
import Cards4x6 from "./Cards4x6";
import Cards5x6 from "./Cards5x6";
import Cards6x6 from "./Cards6x6";
import Cards6x7 from "./Cards6x7";
import Cards6x8 from "./Cards6x8";

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
          <Cards3x4
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : dimensions === "grid4x4" ? (
        <div id="containerCardGrid">
          <Cards4x4
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : dimensions === "grid4x5" ? (
        <div id="containerCardGrid">
          <Cards4x5
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : dimensions === "grid4x6" ? (
        <div id="containerCardGrid">
          <Cards4x6
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : dimensions === "grid5x6" ? (
        <div id="containerCardGrid">
          <Cards5x6
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : dimensions === "grid6x6" ? (
        <div id="containerCardGrid">
          <Cards6x6
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : dimensions === "grid6x7" ? (
        <div id="containerCardGrid">
          <Cards6x7
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : dimensions === "grid6x8" ? (
        <div id="containerCardGrid">
          <Cards6x8
            deck={deck}
            setDeck={setDeck}
            dimensions={dimensions}
            setCurrentLevel={setCurrentLevel}
          />
        </div>
      ) : (
        <div
          id="containerStartGame"
          className="d-flex justify-content-center align-items-center">
          <h1>Thank you for playing our game</h1>
        </div>
      )}
    </div>
  );
};

export default StartGame;
