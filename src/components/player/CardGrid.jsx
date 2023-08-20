// Library Imports
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLeft,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

// Page & Component Imports
import Card from "./Card";
import CountdownTimer from "./CountdownTimer";

function CardGrid({ deck, setDeck, gridWidth, gridDimensions }) {
  const [previous, setPrevious] = useState(-1);

  const [flipCount, setFlipCount] = useState(0);

  // Card Tagger (Correct or Wrong)
  function cardTagger(current) {
    if (deck[current].id === deck[previous].id) {
      if (deck[current].type !== deck[previous].type) {
        deck[current].stat = "correct";
        deck[previous].stat = "correct";

        setFlipCount(flipCount + 1);

        setDeck([...deck]);

        setPrevious(-1);
      }
    } else {
      deck[current].stat = "wrong";
      deck[previous].stat = "wrong";

      setFlipCount(flipCount + 1);

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

  // Card Flipper (Click Handler)
  function cardFlipper(idx) {
    if (previous === -1) {
      setFlipCount(flipCount + 1);

      deck[idx].stat = "shown";

      setDeck([...deck]);
      setPrevious(idx);
    } else {
      cardTagger(idx);
    }
  }

  return (
    <div>
      <div
        className="d-flex justify-content-evenly mx-auto"
        style={{ width: gridWidth }}>
        {/* <p
            id="lblFlipCounter"
            className="rounded border border-3 border-warning px-3">
            <FontAwesomeIcon icon={faRightLeft} />
            &nbsp;
            <span id="valFlipCounter">{flipCount}</span>
          </p> */}

        <div className="divMechanics bg-warning mb-3">
          <p className="m-0 px-3 border border-3 rounded">
            <FontAwesomeIcon icon={faHourglassStart} />
            &nbsp;&nbsp;
            <CountdownTimer />
          </p>
        </div>
      </div>

      <div
        className={"divCardGrid " + gridDimensions}
        style={{ width: gridWidth }}>
        {deck.map((card, index) => (
          <Card
            key={index}
            cardID={index}
            cardImage={card.img}
            cardStatus={card.stat}
            cardFlipper={cardFlipper}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
