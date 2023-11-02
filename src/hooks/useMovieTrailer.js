import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
  /**
   * ! we are fetching tmdb api of videos section where this api will take id of movie and it will give us the videos related to that movie . At last we are filtering the trailers and store only one trailer in our Redux store.
   *
   */

  const dispatch = useDispatch();

  // fetching the data from API
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
 

    // filtering the data we get from api
    const Trailers = json.results?.filter(
      (trailer) => trailer.type === "Trailer"
    );

    // here may be more than one Trailers so we are considering the first one of the array
    const currentTrailer = Trailers.length > 1 ? Trailers[0] : json.results[0];
  

    // dispatching the action in our Redux store to store the trailer data
    dispatch(addMovieTrailer(currentTrailer));
  };

  useEffect(() => {
    // calling the function
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
