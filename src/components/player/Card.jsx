import React from "react";

function Card({ cardID, cardImage, cardStatus, handleClick }) {
  const cardDynamicClass = cardStatus ? " active " + cardStatus : "";

  return (
    <div
      className={"card " + cardDynamicClass}
      onClick={() => handleClick(cardID)}>
      <img
        src={cardImage}
        alt=""
      />
    </div>
  );
}

export default Card;
