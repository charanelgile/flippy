import React, { useState, useEffect } from "react";

// Context Object for Cards (Duplicated)
export const CardsDuplicatedContext = React.createContext();

// Context Provider for Cards (Duplicated)
export const CardsDuplicatedContextProvider = ({ children }) => {
  // State Variable
  const [cardsDuplicated, setCardsDuplicated] = useState(
    localStorage.getItem("cardsDuplicated")
      ? JSON.parse(localStorage.getItem("cardsDuplicated"))
      : []
  );

  // When component mounts, get data from the localStorage
  useEffect(() => {
    JSON.parse(localStorage.getItem("cardsDuplicated"));
  }, []);

  return (
    <CardsDuplicatedContext.Provider
      value={{ cardsDuplicated, setCardsDuplicated }}>
      {children}
    </CardsDuplicatedContext.Provider>
  );
};
