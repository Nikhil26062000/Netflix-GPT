import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useUpComingMovies } from '../hooks/useUpComingMovies'
import { useTrendingMovies } from '../hooks/useTrendingMovies'

const SecondaryContaineer = () => {

  // calling custom hooks
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies()
  useTrendingMovies();

  const moviesInStore = useSelector((store)=>store.movies)
  // console.log(moviesInStore);
  return (
    <div className="-mt-32">
        <MovieList title={"Now Playing"} movies={moviesInStore.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={moviesInStore.upComingMovies}/>
        <MovieList title={"Popular Movies"} movies={moviesInStore.popularMovies}/>
        <MovieList title={"Trending Movies"} movies={moviesInStore.trendingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={moviesInStore.topRatedMovies}/>
        
        
    </div>
  )
}

export default SecondaryContaineer