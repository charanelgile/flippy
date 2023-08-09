import React, { useContext, useState } from "react";
import Card from "./Card";
import { CardsContext } from "../contexts/CardsContext";

function CardGrid() {
  const { cards, setCards } = useContext(CardsContext);
  // const [items, setItems] = useState(
  //   [
  //     { id: 1, img: "/img/html.png", stat: "" },
  //     { id: 1, img: "/img/html.png", stat: "" },
  //     { id: 2, img: "/img/css.png", stat: "" },
  //     { id: 2, img: "/img/css.png", stat: "" },
  //     { id: 3, img: "/img/js.png", stat: "" },
  //     { id: 3, img: "/img/js.png", stat: "" },
  //     { id: 4, img: "/img/scss.png", stat: "" },
  //     { id: 4, img: "/img/scss.png", stat: "" },
  //     { id: 5, img: "/img/react.png", stat: "" },
  //     { id: 5, img: "/img/react.png", stat: "" },
  //     { id: 6, img: "/img/vue.png", stat: "" },
  //     { id: 6, img: "/img/vue.png", stat: "" },
  //     { id: 7, img: "/img/angular.png", stat: "" },
  //     { id: 7, img: "/img/angular.png", stat: "" },
  //     { id: 8, img: "/img/nodejs.png", stat: "" },
  //     { id: 8, img: "/img/nodejs.png", stat: "" },
  //   ].sort(() => Math.random() - 0.5)
  // );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (cards[current].id === cards[prev].id) {
      cards[current].stat = "correct";
      cards[prev].stat = "correct";
      setCards([...cards]);
      setPrev(-1);
    } else {
      cards[current].stat = "wrong";
      cards[prev].stat = "wrong";
      setCards([...cards]);
      setTimeout(() => {
        cards[current].stat = "";
        cards[prev].stat = "";
        setCards([...cards]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      cards[id].stat = "active";
      setCards([...cards]);
      setPrev(id);
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
