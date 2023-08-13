import React from "react";
import CardGrid from "../components/player/CardGrid";

export default function Home() {
  return (
    <div>
      <div
        id="containerCardGrid"
        className="containerForComponents">
        <CardGrid />
      </div>
    </div>
  );
}
