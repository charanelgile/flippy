import React from "react";

function Card({ id, cardImage, cardStatus, handleClick }) {
  const itemClass = cardStatus ? " active " + cardStatus : "";

  return (
    <div
      className={"card" + itemClass}
      onClick={() => handleClick(id)}>
      <img
        src={cardImage}
        alt=""
      />
    </div>
  );
}

export default Card;
