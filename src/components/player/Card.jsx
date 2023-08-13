import React from "react";

function Card({ cardID, cardImage, cardStatus, cardClick }) {
  const cardFlag = cardStatus ? " active " + cardStatus : "";

  return (
    <div
      className={"card" + cardFlag}
      onClick={() => cardClick(cardID)}>
      <img
        src={cardImage}
        alt=""
      />
    </div>
  );
}

export default Card;
