import React, { useState, useEffect } from "react";

// Context Object for the Current Session
export const PlayerSessionContext = React.createContext();

// Context Provider for the Current Session
export const PlayerSessionContextProvider = ({ children }) => {
  // Get the Current Session from the Local Storage when there are values stored. Otherwise, default to guest details.
  const [playerSession, setPlayerSession] = useState(
    localStorage.getItem("playerSession")
      ? JSON.parse(localStorage.getItem("playerSession"))
      : [
          {
            playerID: 1,
            playerName: "Guest",
            playerCodename: "guest",
            playerEmail: "guest@email.com",
            playerCurrentScore: 0,
            playerTotalScore: 0,
            playerHighScore: 0,
            playerLevel: 1,
            playerGridDimensions: "grid3x4",
          },
        ]
  );

  // Update the values stored in the Local Storage everytime there are changes in the Current Session
  useEffect(() => {
    localStorage.setItem("playerSession", JSON.stringify(playerSession));
  }, [playerSession]);

  return (
    <PlayerSessionContext.Provider value={{ playerSession, setPlayerSession }}>
      {children}
    </PlayerSessionContext.Provider>
  );
};
