import { useState } from "react";
import { FavoriteContext } from "./FavoriteContext";

const favoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default favoriteProvider;
