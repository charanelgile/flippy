import React, { useContext, useState } from "react";
import Card from "./Card";
import { CardSetAContext } from "../../contexts/CardSetAContext";
import { CardSetBContext } from "../../contexts/CardSetBContext";

function CardGrid() {
  const [deck, setDeck] = useState([]);
  const { cardsA } = useContext(CardSetAContext);
  const { cardsB } = useContext(CardSetBContext);

  const [previous, setPrevious] = useState(-1);

  let gridWidth = "85%";
  const [gridDimensions, setGridDimensions] = useState("grid4x4");

  let startCount = 0;
  let endCount = 0;
  let pairs = [];

  // Start the Game at the Click of the Button
  const startGame = (dimensions) => {
    switch (dimensions) {
      // If dimensions = 4x4, the number of card pairs needed will be 8 making a grid of 16 cards
      // Randomly select a number between 1 to 49 and set as the starting count
      // Limit is set to 49 so as not to exceed the 57 total cards (if in case 49 was selected and added by 8 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x4":
        gridWidth = "70%";

        startCount = Math.floor(Math.random() * (49 - 1) + 1);
        endCount = startCount + 8;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
      // If dimensions = 4x5, the number of card pairs needed will be 10 making a grid of 20 cards
      // Randomly select a number between 1 to 47 and set as the starting count
      // Limit is set to 47 so as not to exceed the 57 total cards (if in case 47 was selected and added by 10 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x5":
        gridWidth = "85%";

        startCount = Math.floor(Math.random() * (47 - 1) + 1);
        endCount = startCount + 10;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
      // If dimensions = 4x6, the number of card pairs needed will be 12 making a grid of 24 cards
      // Randomly select a number between 1 to 45 and set as the starting count
      // Limit is set to 45 so as not to exceed the 57 total cards (if in case 45 was selected and added by 12 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x6":
        gridWidth = "95%";

        startCount = Math.floor(Math.random() * (45 - 1) + 1);
        endCount = startCount + 12;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
      // dimensions = 5x6
      case "grid5x6":
        gridWidth = "75%";

        startCount = Math.floor(Math.random() * (42 - 1) + 1);
        endCount = startCount + 15;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
      // dimensions = 6x6
      case "grid6x6":
        gridWidth = "70%";

        startCount = Math.floor(Math.random() * (39 - 1) + 1);
        endCount = startCount + 18;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
      // dimensions = 6x7
      case "grid6x7":
        gridWidth = "75%";

        startCount = Math.floor(Math.random() * (36 - 1) + 1);
        endCount = startCount + 21;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
      // dimensions = 6x8
      case "grid6x8":
        gridWidth = "85%";

        startCount = Math.floor(Math.random() * (33 - 1) + 1);
        endCount = startCount + 24;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
      // default dimensions = 3x4
      default:
        startCount = Math.floor(Math.random() * (51 - 1) + 1);
        endCount = startCount + 6;

        populatePairs(startCount, endCount);

        console.log(pairs);
        break;
    }
  };

  // Populate the Pair of Cards
  const populatePairs = (start, end) => {
    for (let x = start; x < end; x++) {
      pairs.push(cardsA[x]);
      pairs.push(cardsB[x]);
    }

    // Randomize the Pair of Cards
    pairs.sort(() => Math.random() - 0.5);

    // Pass the Randomized Pair of Cards to the Deck
    setDeck(pairs);
  };

  // Card Tagger (Correct or Wrong)
  function cardTag(current) {
    if (deck[current].id === deck[previous].id) {
      if (deck[current].type !== deck[previous].type) {
        deck[current].stat = "correct";
        deck[previous].stat = "correct";

        setDeck([...deck]);

        setPrevious(-1);
      }
    } else {
      deck[current].stat = "wrong";
      deck[previous].stat = "wrong";

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

  // Card Click Handler
  function cardClick(idx) {
    if (previous === -1) {
      deck[idx].stat = "shown";

      setDeck([...deck]);
      setPrevious(idx);
    } else {
      cardTag(idx);
    }
  }

  console.log(`Previous Value: ${previous}`);

  return (
    <div>
      {deck.length > 0 ? null : (
        <div className="text-center mb-5">
          <button
            className="btn btn-warning text-white"
            onClick={() => {
              startGame(gridDimensions);
            }}>
            Start Game
          </button>
        </div>
      )}

      <div
        className={"divCardGrid " + gridDimensions}
        style={{ width: gridWidth }}>
        {deck.map((card, index) => (
          <Card
            key={index}
            cardID={index}
            cardImage={card.img}
            cardStatus={card.stat}
            cardClick={cardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
