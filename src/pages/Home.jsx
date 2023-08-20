import React from "react";
import CardGrid from "../components/player/CardGrid";
import CardsGrid from "../components/player/CardsGrid";

export default function Home() {
  return (
    <div>
      <div
        id="containerCardGrid"
        className="containerForComponents">
        <CardsGrid />

        <CardGrid />
      </div>
    </div>
  );
}
