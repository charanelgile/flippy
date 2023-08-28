// Library Imports
import React, { useContext } from "react";

// Context Import
import { CurrentSessionContext } from "../../contexts/CurrentSessionContext";

// Custom Hook Import
import useDeck from "../../hooks/useDeck";

// Page & Component Import
import CardsGrid from "./CardsGrid";
import SaveHighScore from "./SaveHighScore";

const StartGame = () => {
  const { currentSession } = useContext(CurrentSessionContext);

  const [minutes, seconds, deck, setDeck, startGame] = useDeck({
    dimensions: currentSession[0].playerGridDimensions[0],
  });

  return (
    <div>
      {deck.length === 0 && currentSession[0].playerLevel < 9 ? (
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
      ) : currentSession[0].playerGridDimensions.length !== 0 ? (
        <div id="containerCardGrid">
          <CardsGrid
            minutes={minutes}
            seconds={seconds}
            deck={deck}
            setDeck={setDeck}
            dimensions={currentSession[0].playerGridDimensions[0]}
          />
        </div>
      ) : deck.length === 0 && currentSession[0].playerLevel > 8 ? (
        <SaveHighScore currentSession={currentSession[0]} />
      ) : (
        ""
      )}
    </div>
  );
};

export default StartGame;
