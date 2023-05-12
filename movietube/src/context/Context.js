import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";


const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within AppContextProvider!")
  }

  return context;
}

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    const oldFavorites = [...favorites]

    const newFavorites = oldFavorites.concat(movie)

    setFavorites(newFavorites);

  }
  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites]

    const newFavorites = oldFavorites.filter((movie) => movie.id !== id)

    setFavorites(newFavorites);
  }


  return <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>{children}</AppContext.Provider>;
}


export default AppContextProvider;

