
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContaineer from "./MainContaineer";
import SecondaryContaineer from "./SecondaryContaineer";


const Browse = () => {



  //This is custom hook
  useNowPlayingMovies();



  return (
    <div className="">
      <div className="">
        <Header />
        <MainContaineer/>
        <SecondaryContaineer/>
      </div>
    </div>
  );
};

export default Browse;
