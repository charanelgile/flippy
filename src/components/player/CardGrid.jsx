import React, { useContext, useState } from "react";
import Card from "./Card";
import { CardsContext } from "../../contexts/CardsContext";
import { DuplicatesContext } from "../../contexts/DuplicatesContext";

function CardGrid() {
  const { cards } = useContext(CardsContext);
  const { duplicates, setDuplicates } = useContext(DuplicatesContext);

  let gridWidth = "85%";
  const [gridDimensions, setGridDimensions] = useState("grid4x4");

  const [previous, setPrevious] = useState(-1);

  let currentCardSet = [];
  let startingIndex = 0;
  let endingIndex = 0;

  // Card Grid Generator (Dynamic)
  switch (gridDimensions) {
    // If "gridDimensions" = 4x4, the number of card pairs needed will be 8 making a grid of 16 cards
    // Randomly select a number between 1 to 49 and set as the starting index count
    // Limit is set to 49 so as not to exceed the 57 total cards (if in case 49 was selected and added by 8 - the number of card pairs needed)
    // The ending index count is equal to the starting index count added by the number of card pairs needed
    case "grid4x4":
      gridWidth = "70%";

      startingIndex = Math.floor(Math.random() * (49 - 1) + 1);
      endingIndex = startingIndex + 8;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        // Populate the array twice every iteration, to store duplicates
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
    // If "gridDimensions" = 4x5, the number of card pairs needed will be 10 making a grid of 20 cards
    // Randomly select a number between 1 to 47 and set as the starting index count
    // Limit is set to 47 so as not to exceed the 57 total cards (if in case 47 was selected and added by 10 - the number of card pairs needed)
    // The ending index count is equal to the starting index count added by the number of card pairs needed
    case "grid4x5":
      gridWidth = "85%";

      startingIndex = Math.floor(Math.random() * (47 - 1) + 1);
      endingIndex = startingIndex + 10;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        //  Populate the array twice every iteration, to store duplicates
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
    // If "gridDimensions" = 4x6, the number of card pairs needed will be 12 making a grid of 24 cards
    // Randomly select a number between 1 to 45 and set as the starting index count
    // Limit is set to 45 so as not to exceed the 57 total cards (if in case 45 was selected and added by 12 - the number of card pairs needed)
    // The ending index count is equal to the starting index count added by the number of card pairs needed
    case "grid4x6":
      gridWidth = "95%";

      startingIndex = Math.floor(Math.random() * (45 - 1) + 1);
      endingIndex = startingIndex + 12;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        //  Populate the array twice every iteration, to store duplicates
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
    // Same logic until "gridDimensions" = 6x8
    case "grid5x6":
      gridWidth = "75%";

      startingIndex = Math.floor(Math.random() * (42 - 1) + 1);
      endingIndex = startingIndex + 15;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
    case "grid6x6":
      gridWidth = "70%";

      startingIndex = Math.floor(Math.random() * (39 - 1) + 1);
      endingIndex = startingIndex + 18;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
    case "grid6x7":
      gridWidth = "75%";

      startingIndex = Math.floor(Math.random() * (36 - 1) + 1);
      endingIndex = startingIndex + 21;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
    case "grid6x8":
      gridWidth = "85%";

      startingIndex = Math.floor(Math.random() * (33 - 1) + 1);
      endingIndex = startingIndex + 24;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
    //  Default "gridDimensions" = 3x4
    default:
      startingIndex = Math.floor(Math.random() * (51 - 1) + 1);
      endingIndex = startingIndex + 6;

      for (let ctr = startingIndex; ctr < endingIndex; ctr++) {
        currentCardSet.push(cards[ctr]);
        currentCardSet.push(cards[ctr]);
      }

      // Jumble the array elements before saving to localStorage
      currentCardSet.sort(() => Math.random() - 0.5);

      localStorage.setItem("duplicates", JSON.stringify(currentCardSet));
      break;
  }

  // Card Tagger (Correct or Wrong)
  function cardTag(current) {
    if (duplicates[current].id === duplicates[previous].id) {
      duplicates[current].stat = "correct";
      duplicates[previous].stat = "correct";

      setDuplicates([...duplicates]);

      setPrevious(-1);
    } else {
      duplicates[current].stat = "wrong";
      duplicates[previous].stat = "wrong";

      // setDuplicates([...duplicates]);

      setTimeout(() => {
        duplicates[current].stat = "";
        duplicates[previous].stat = "";

        setDuplicates([...duplicates]);
      }, 1000);

      setPrevious(-1);
    }
  }

  // Card Click Handler
  function cardClick(idx) {
    console.log(duplicates);
    console.log(previous);

    if (previous === -1) {
      duplicates[idx].stat = "shown";

      setDuplicates([...duplicates]);

      setPrevious(idx);
    } else {
      cardTag(idx);
    }

    console.log(previous);
  }

  return (
    <div
      className={"divCardGrid " + gridDimensions}
      style={{ width: gridWidth }}>
      {duplicates.map((card, index) => (
        <Card
          key={index}
          cardID={index}
          cardImage={card.img}
          cardStatus={card.stat}
          cardClick={cardClick}
        />
      ))}
    </div>
  );
}

export default CardGrid;
