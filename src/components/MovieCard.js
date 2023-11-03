import React from 'react'
import { IMG_URL } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-32 rounded-lg">
         <img src={IMG_URL+posterPath} alt="imgUrl" />
    </div>
  )
}

export default MovieCard