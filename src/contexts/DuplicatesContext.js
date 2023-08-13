import React, { useState, useEffect } from "react";

// Context Object for Duplicate Cards
export const DuplicatesContext = React.createContext();

// Context Provider for Duplicate Cards
export const DuplicatesContextProvider = ({ children }) => {
  // State Variable
  const [duplicates, setDuplicates] = useState(
    localStorage.getItem("duplicates")
      ? JSON.parse(localStorage.getItem("duplicates"))
      : []
  );

  // When component mounts, get data from the localStorage
  useEffect(() => {
    JSON.parse(localStorage.getItem("duplicates"));
  }, []);

  return (
    <DuplicatesContext.Provider value={{ duplicates, setDuplicates }}>
      {children}
    </DuplicatesContext.Provider>
  );
};
