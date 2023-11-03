import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";




export const useTrendingMovies = () => {

    const dispatch = useDispatch();

    const getTrendingMovies = async () => {

        // fetching data of popular movies from tmdb api
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);

        // storing the popular movies in Redux store
        dispatch(addTrendingMovie(json.results))
    }

    useEffect(()=>{
        getTrendingMovies();
    },[])
}