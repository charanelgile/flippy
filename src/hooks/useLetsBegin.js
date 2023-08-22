import { useState, useContext } from "react";
import { CardSetAContext } from "../contexts/CardSetAContext";
import { CardSetBContext } from "../contexts/CardSetBContext";

const useLetsBegin = ({ gridDimensions }) => {
  const [deck, setDeck] = useState([]);

  const { cardsA } = useContext(CardSetAContext);
  const { cardsB } = useContext(CardSetBContext);

  let startingIndexCount = 0;
  let endingIndexCount = 0;
  let pairs = [];

  // Start the Game at the Click of the Button
  const startGame = () => {
    switch (gridDimensions) {
      // If dimensions = 4x4, the number of card pairs needed will be 8 making a grid of 16 cards
      // Randomly select a number between 1 to 49 and set as the starting count
      // Limit is set to 49 so as not to exceed the 57 total cards (if in case 49 was selected and added by 8 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x4":
        startingIndexCount = Math.floor(Math.random() * (49 - 1) + 1);
        endingIndexCount = startingIndexCount + 8;

        populatePairs(startingIndexCount, endingIndexCount);

        console.log(pairs);
        break;
      // If dimensions = 4x5, the number of card pairs needed will be 10 making a grid of 20 cards
      // Randomly select a number between 1 to 47 and set as the starting count
      // Limit is set to 47 so as not to exceed the 57 total cards (if in case 47 was selected and added by 10 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x5":
        startingIndexCount = Math.floor(Math.random() * (47 - 1) + 1);
        endingIndexCount = startingIndexCount + 10;

        populatePairs(startingIndexCount, endingIndexCount);

        console.log(pairs);
        break;
      // If dimensions = 4x6, the number of card pairs needed will be 12 making a grid of 24 cards
      // Randomly select a number between 1 to 45 and set as the starting count
      // Limit is set to 45 so as not to exceed the 57 total cards (if in case 45 was selected and added by 12 - the number of card pairs needed)
      // The ending count is equal to the starting count added by the number of card pairs needed
      case "grid4x6":
        startingIndexCount = Math.floor(Math.random() * (45 - 1) + 1);
        endingIndexCount = startingIndexCount + 12;

        populatePairs(startingIndexCount, endingIndexCount);

        console.log(pairs);
        break;
      // dimensions = 5x6
      case "grid5x6":
        startingIndexCount = Math.floor(Math.random() * (42 - 1) + 1);
        endingIndexCount = startingIndexCount + 15;

        populatePairs(startingIndexCount, endingIndexCount);

        console.log(pairs);
        break;
      // dimensions = 6x6
      case "grid6x6":
        startingIndexCount = Math.floor(Math.random() * (39 - 1) + 1);
        endingIndexCount = startingIndexCount + 18;

        populatePairs(startingIndexCount, endingIndexCount);

        console.log(pairs);
        break;
      // dimensions = 6x7
      case "grid6x7":
        startingIndexCount = Math.floor(Math.random() * (36 - 1) + 1);
        endingIndexCount = startingIndexCount + 21;

        populatePairs(startingIndexCount, endingIndexCount);

        console.log(pairs);
        break;
      // dimensions = 6x8
      case "grid6x8":
        startingIndexCount = Math.floor(Math.random() * (33 - 1) + 1);
        endingIndexCount = startingIndexCount + 24;

        populatePairs(startingIndexCount, endingIndexCount);

        console.log(pairs);
        break;
      // dimensions = 3x4 [default]
      default:
        startingIndexCount = Math.floor(Math.random() * (51 - 1) + 1);
        endingIndexCount = startingIndexCount + 6;

        populatePairs(startingIndexCount, endingIndexCount);

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

  // Return Items for Consumption
  return [deck, setDeck, startGame];
};

export default useLetsBegin;
