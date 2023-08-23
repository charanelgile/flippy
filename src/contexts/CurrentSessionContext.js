import React, { useState, useEffect } from "react";

// Context Object for the Current Session
export const CurrentSessionContext = React.createContext();

// Context Provider for the Current Session
export const CurrentSessionContextProvider = ({ children }) => {
  // Get the Current Session from the Local Storage when there are values stored. Otherwise, default to guest details.
  const [currentSession, setCurrentSession] = useState(
    localStorage.getItem("currentSession")
      ? JSON.parse(localStorage.getItem("currentSession"))
      : [
          {
            playerID: 1111,
            playerName: "Guest Player",
            playerCodename: "guestplayer",
            playerEmail: "guestplayer@email.com",
            playerTotalScore: 0,
            playerHighScore: 0,
            playerLevel: 1,
            playerGridDimensions: [
              "grid3x4",
              "grid4x4",
              "grid4x5",
              "grid4x6",
              "grid5x6",
              "grid6x6",
              "grid6x7",
              "grid6x8",
            ],
          },
        ]
  );

  // Update the values stored in the Local Storage everytime there are changes in the Current Session
  useEffect(() => {
    localStorage.setItem("currentSession", JSON.stringify(currentSession));
  }, [currentSession]);

  return (
    <CurrentSessionContext.Provider
      value={{ currentSession, setCurrentSession }}>
      {children}
    </CurrentSessionContext.Provider>
  );
};
