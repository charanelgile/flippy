// Library Imports
import React, { useState, useEffect } from "react";

// Page & Component Imports
import StartGame from "../components/player/StartGame";

export default function Home() {
  // Get the Current Level from the Local Storage when there is a value currently stored. Otherwise, 1.
  const [currentLevel, setCurrentLevel] = useState(
    localStorage.getItem("currentLevel")
      ? JSON.parse(localStorage.getItem("currentLevel"))
      : 1
  );

  // Update the value stored in the Local Storage everytime the Current Level changes
  useEffect(() => {
    localStorage.setItem("currentLevel", JSON.stringify(currentLevel));
  }, [currentLevel]);

  return (
    <div>
      <StartGame
        gridDimensions="grid4x5"
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
      />
    </div>
  );
}
