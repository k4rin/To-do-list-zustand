import React from "react";
import { StoreContext, initialStoreContext } from "./StoreContext";
import { reducer } from "./StoreReducer";

export const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialStoreContext);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}; 
