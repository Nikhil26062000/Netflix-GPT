import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContaineer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[0];
    // console.log(mainMovie);

    const {original_title,overview, id} = mainMovie;


  return (
    <div className=' relative overflow-hidden max-lg:bg-black'>
        <VideoBackground movieId = {id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContaineer