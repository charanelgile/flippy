import React from "react";

const Card = ({ cardIndex, cardImage, cardStatus, cardFlipper }) => {
  const cardClass = cardStatus ? " active " + cardStatus : "";

  return (
    <div
      className={"card" + cardClass}
      onClick={() => {
        cardFlipper(cardIndex);
      }}>
      <img src={cardImage} alt="" />
    </div>
  );
};

export default Card;
