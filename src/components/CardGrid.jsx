import React, { useContext, useState } from "react";
import Card from "./Card";
import { CardsContext } from "../contexts/CardsContext";

function CardGrid() {
  const { cards, setCards } = useContext(CardsContext);

  const [previous, setPrevious] = useState(-1);

  function check(current) {
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
      }, 1000);
    }
  }

  function handleClick(id) {
    if (previous === -1) {
      cards[id].stat = "active";
      setCards([...cards]);
      setPrevious(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {cards.map((item, index) => (
        <Card
          key={index}
          item={item}
          id={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default CardGrid;
