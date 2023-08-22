import React from "react";

function Card({ cardIndex, cardImage, cardStatus, cardFlipper }) {
  const cardFlag = cardStatus ? " active " + cardStatus : "";

  return (
    <div className={"card" + cardFlag} onClick={() => cardFlipper(cardIndex)}>
      <img src={cardImage} alt="" />
    </div>
  );
}

export default Card;
