import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={"hello"}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}