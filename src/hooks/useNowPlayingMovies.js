import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const useNowPlayingMovies = () => {
  /**
   * ! 1. BELOW WE ARE FETCHING THE DATA FROM TMDB API AND WE ARE CALLING THE FUNCTION IN USEEFFECT HOOK
   * ! 2. WE ARE ALSO UPDATING OUR REDUX STORE
   */

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    // 1.FETCHING THE DATA FROM TMDB

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);

    //2.UPDATING THE REDUX STORE
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};


export default  useNowPlayingMovies;