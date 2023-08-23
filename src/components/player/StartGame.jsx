// Library Imports
import React, { useContext } from "react";

// Context Import
import { CurrentSessionContext } from "../../contexts/CurrentSessionContext";

// Custom Hook Import
import useDeck from "../../hooks/useDeck";

import Cards3x4 from "./Cards/Cards3x4";
import Cards4x4 from "./Cards/Cards4x4";
import Cards4x5 from "./Cards/Cards4x5";
import Cards4x6 from "./Cards/Cards4x6";
import Cards5x6 from "./Cards/Cards5x6";
import Cards6x6 from "./Cards/Cards6x6";
import Cards6x7 from "./Cards/Cards6x7";
import Cards6x8 from "./Cards/Cards6x8";

const StartGame = () => {
  const { currentSession } = useContext(CurrentSessionContext);

  const [deck, setDeck, startGame] = useDeck({
    dimensions: currentSession[0].playerGridDimensions[0],
  });

  return (
    <div>
      {deck.length === 0 ? (
        <div
          id="containerStartGame"
          className="d-flex justify-content-center align-items-center">
          <section className="sectionStartGame d-flex flex-column bg-warning p-2 rounded">
            <button
              className="btnStartGame btn btn-warning"
              onClick={startGame}>
              <p className="m-0 py-1 px-3 border border-3 rounded">
                Start Game
              </p>
            </button>

            <small>Level {currentSession[0].playerLevel}</small>
          </section>
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid3x4" ? (
        <div id="containerCardGrid">
          <Cards3x4
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid4x4" ? (
        <div id="containerCardGrid">
          <Cards4x4
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid4x5" ? (
        <div id="containerCardGrid">
          <Cards4x5
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid4x6" ? (
        <div id="containerCardGrid">
          <Cards4x6
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid5x6" ? (
        <div id="containerCardGrid">
          <Cards5x6
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid6x6" ? (
        <div id="containerCardGrid">
          <Cards6x6
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid6x7" ? (
        <div id="containerCardGrid">
          <Cards6x7
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : currentSession[0].playerGridDimensions[0] === "grid6x8" ? (
        <div id="containerCardGrid">
          <Cards6x8
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : (
        <div
          id="containerStartGame"
          className="d-flex justify-content-center align-items-center text-warning">
          <h1>Thank you for playing our game</h1>
        </div>
      )}
    </div>
  );
};

export default StartGame;
