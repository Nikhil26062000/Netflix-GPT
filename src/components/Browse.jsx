import React, { useEffect } from "react";
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Browse;
