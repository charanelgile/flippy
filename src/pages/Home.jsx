// Library Imports
import React, { useContext } from "react";

// Page & Component Imports
import StartGame from "../components/player/StartGame";

// Context Imports
import { PlayerSessionContext } from "../contexts/PlayerSessionContext";

export default function Home() {
  const { playerSession } = useContext(PlayerSessionContext);

  return (
    <div>
      <StartGame
        level={playerSession[0].playerLevel}
        dimensions={playerSession[0].playerGridDimensions}
      />
    </div>
  );
}
