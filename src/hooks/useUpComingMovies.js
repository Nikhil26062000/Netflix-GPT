import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addUpComingMovie } from "../utils/movieSlice";
import { useEffect } from "react";


export const useUpComingMovies = () => {

    const dispatch = useDispatch();

    const getUpComingMovies = async () => {
         const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
         const json = await data.json();

         dispatch(addUpComingMovie(json.results))
        
    
      
    }

    useEffect(()=>{
        getUpComingMovies();
    },[])

}