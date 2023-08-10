import React, { useContext, useState } from "react";
import Card from "./Card";
import { CardsContext } from "../contexts/CardsContext";
import { CardsDuplicatedContext } from "../contexts/CardsDuplicatedContext";

function CardGrid() {
  const { cards, setCards } = useContext(CardsContext);
  const { cardsDuplicated, setCardsDuplicated } = useContext(
    CardsDuplicatedContext
  );

  const [gridDimensions, setGridDimensions] = useState("grid4x5");

  const [previous, setPrevious] = useState(-1);

  const duplicates = [];
  let startingIndex = 0;
  let endingIndex = 0;

  switch (gridDimensions) {
    // If "gridDimensions" = 4x4, the number of card pairs needed will be 8 making a grid of 16 cards
    // Randomly select a number between 1 to 49 and set as the starting index count
    // Limit is set to 49 so as not to exceed the 57 total cards (if in case 49 was selected and added by 8 - the number of card pairs needed)
    // The ending index count is equal to the starting index count added by the number of card pairs needed
    case "grid4x4":
      startingIndex = Math.floor(Math.random() * (49 - 1) + 1);
      endingIndex = startingIndex + 8;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        //  Populate the array twice every iteration, to store duplicates
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
    // If "gridDimensions" = 4x5, the number of card pairs needed will be 10 making a grid of 20 cards
    // Randomly select a number between 1 to 47 and set as the starting index count
    // Limit is set to 47 so as not to exceed the 57 total cards (if in case 47 was selected and added by 10 - the number of card pairs needed)
    // The ending index count is equal to the starting index count added by the number of card pairs needed
    case "grid4x5":
      startingIndex = Math.floor(Math.random() * (47 - 1) + 1);
      endingIndex = startingIndex + 10;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        //  Populate the array twice every iteration, to store duplicates
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
    // If "gridDimensions" = 4x6, the number of card pairs needed will be 12 making a grid of 24 cards
    // Randomly select a number between 1 to 45 and set as the starting index count
    // Limit is set to 45 so as not to exceed the 57 total cards (if in case 45 was selected and added by 12 - the number of card pairs needed)
    // The ending index count is equal to the starting index count added by the number of card pairs needed
    case "grid4x6":
      startingIndex = Math.floor(Math.random() * (45 - 1) + 1);
      endingIndex = startingIndex + 12;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        //  Populate the array twice every iteration, to store duplicates
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
    // Same logic until "gridDimensions" = 6x8
    case "grid5x6":
      startingIndex = Math.floor(Math.random() * (42 - 1) + 1);
      endingIndex = startingIndex + 15;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
    case "grid6x6":
      startingIndex = Math.floor(Math.random() * (39 - 1) + 1);
      endingIndex = startingIndex + 18;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
    case "grid6x7":
      startingIndex = Math.floor(Math.random() * (36 - 1) + 1);
      endingIndex = startingIndex + 21;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
    case "grid6x8":
      startingIndex = Math.floor(Math.random() * (33 - 1) + 1);
      endingIndex = startingIndex + 24;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
    //  Default "gridDimensions" = 4x4
    default:
      startingIndex = Math.floor(Math.random() * (49 - 1) + 1);
      endingIndex = startingIndex + 8;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        duplicates.push(cards[ctr]);
        duplicates.push(cards[ctr]);
      }
      break;
  }

  // console.log(duplicates);

  function statusCheck(current) {
    if (cards[current].id === cards[previous].id) {
      cards[current].stat = "correct";
      cards[previous].stat = "correct";

      setCards([...cards]);

      setPrevious(-1);
    } else {
      cards[current].stat = "wrong";
      cards[previous].stat = "wrong";

      setCards([...cards]);

      setTimeout(() => {
        cards[current].stat = "";
        cards[previous].stat = "";

        setCards([...cards]);
        setPrevious(-1);
      }, 1500);
    }
  }

  function handleClick(id) {
    if (previous === -1) {
      cards[id].stat = "active";
      setCards([...cards]);
      setPrevious(id);
    } else {
      statusCheck(id);
    }
  }

  return (
    <div className={"divCardGrid " + gridDimensions}>
      {cards.map((card, index) => (
        <Card
          key={index}
          id={index}
          cardImage={card.img}
          cardStatus={card.stat}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default CardGrid;
