import { token } from "../../utils/token";
import useApi from "../../services/useApi";
import { useState } from "react";

import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [airQuality, setAirQuality] = useState();
  const favoriteCities = ["shangai", "madrid"]; //consulta base de datos

  favoriteCities.map((city) => {
    const data = useApi(`http://api.waqi.info/feed/${city}/?token=${token}`);
    console.log("hola");
    console.log(data);
    if (!data) {
      return <p>loanding..</p>;
    }
    return <FavoriteCard data={data} />;
  });
};

export default Favorites;
