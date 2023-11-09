import React from 'react'

import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    // console.log(movies);
  return (
    <div className=" bg-black text-white px-12 ">
    <h2 className=" font-semibold text-2xl absolute z-50">{title}</h2>
    <div className='movieList flex overflow-x-scroll'>
     
        <div className="flex gap-5 py-12 z-50">
            {
               movies && movies.map((movie,index)=>{
                    return <MovieCard key={index} posterPath={movie?.poster_path}/>

                })
            }
        </div>
    </div>
    </div>
  )
}

export default MovieList