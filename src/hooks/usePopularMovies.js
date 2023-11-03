import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";


export const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {

        // fetching data of popular movies from tmdb api
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);

        // storing the popular movies in Redux store
        dispatch(addPopularMovie(json.results))
    }

    useEffect(()=>{
        getPopularMovies();
    },[])
}