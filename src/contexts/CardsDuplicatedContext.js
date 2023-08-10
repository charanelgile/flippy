import React, { useState } from "react";

// Context Object for Cards (Duplicated)
export const CardsDuplicatedContext = React.createContext();

// Context Provider for Cards (Duplicated)
export const CardsDuplicatedContextProvider = ({ children }) => {
  // State Variable
  const [cardsDuplicated, setCardsDuplicated] = useState(
    []
    // .sort(() => Math.random() - 0.5)
  );

  return (
    <CardsDuplicatedContext.Provider
      value={{ cardsDuplicated, setCardsDuplicated }}>
      {children}
    </CardsDuplicatedContext.Provider>
  );
};
