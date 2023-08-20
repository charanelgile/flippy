import React from "react";

function Card({ cardID, cardImage, cardStatus, cardFlipper }) {
  const cardFlag = cardStatus ? " active " + cardStatus : "";

  return (
    <div className={"card" + cardFlag} onClick={() => cardFlipper(cardID)}>
      <img src={cardImage} alt="" />
    </div>
  );
}

export default Card;
