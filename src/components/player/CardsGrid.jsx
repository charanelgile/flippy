import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import { CardSetAContext } from "../../contexts/CardSetAContext";
import { CardSetBContext } from "../../contexts/CardSetBContext";

const CardsGrid = () => {
  const { cardsA } = useContext(CardSetAContext);
  const { cardsB } = useContext(CardSetBContext);

  let gridWidth = "85%";
  const [gridDimensions, setGridDimensions] = useState("grid4x5");

  let startCount = 0;
  let endCount = 0;
  let deck = [];

  const begin = (dimensions) => {
    switch (dimensions) {
      // If dimensions = 4x4, the number of card pairs needed will be 8 making a grid of 16 cards
      // Randomly select a number between 1 to 49 and set as the starting count
      // Limit is set to 49 so as not to exceed the 57 total cards (if in case 49 was selected and added by 8 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x4":
        gridWidth = "70%";

        startCount = Math.floor(Math.random() * (49 - 1) + 1);
        endCount = startCount + 8;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
      // If dimensions = 4x5, the number of card pairs needed will be 10 making a grid of 20 cards
      // Randomly select a number between 1 to 47 and set as the starting count
      // Limit is set to 47 so as not to exceed the 57 total cards (if in case 47 was selected and added by 10 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x5":
        gridWidth = "85%";

        startCount = Math.floor(Math.random() * (47 - 1) + 1);
        endCount = startCount + 10;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
      // If dimensions = 4x6, the number of card pairs needed will be 12 making a grid of 24 cards
      // Randomly select a number between 1 to 45 and set as the starting count
      // Limit is set to 45 so as not to exceed the 57 total cards (if in case 45 was selected and added by 12 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x6":
        gridWidth = "95%";

        startCount = Math.floor(Math.random() * (45 - 1) + 1);
        endCount = startCount + 12;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
      // dimensions = 5x6
      case "grid5x6":
        gridWidth = "75%";

        startCount = Math.floor(Math.random() * (42 - 1) + 1);
        endCount = startCount + 15;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
      // dimensions = 6x6
      case "grid6x6":
        gridWidth = "70%";

        startCount = Math.floor(Math.random() * (39 - 1) + 1);
        endCount = startCount + 18;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
      // dimensions = 6x7
      case "grid6x7":
        gridWidth = "75%";

        startCount = Math.floor(Math.random() * (36 - 1) + 1);
        endCount = startCount + 21;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
      // dimensions = 6x8
      case "grid6x8":
        gridWidth = "85%";

        startCount = Math.floor(Math.random() * (33 - 1) + 1);
        endCount = startCount + 24;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
      // default dimensions = 3x4
      default:
        startCount = Math.floor(Math.random() * (51 - 1) + 1);
        endCount = startCount + 6;

        populateDeck(startCount, endCount);

        console.log(deck);
        break;
    }
  };

  // Populate the Deck of Cards
  const populateDeck = (start, end) => {
    for (let x = start; x < end; x++) {
      deck.push(cardsA[x]);
      deck.push(cardsB[x]);
    }

    // Randomize the Deck of Cards
    deck.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="text-center mb-5">
      <button
        className="btn btn-warning text-white"
        onClick={() => {
          begin(gridDimensions);
        }}>
        Start Game
      </button>
    </div>
  );
};

export default CardsGrid;
