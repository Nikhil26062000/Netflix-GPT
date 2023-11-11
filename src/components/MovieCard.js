import React from 'react'
import { IMG_URL } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 rounded-lg cursor-pointer">
         <img className=" w-[300px] rounded-sm hover:border border-white" src={IMG_URL+posterPath} alt="imgUrl" />
    </div>
  )
}

export default MovieCard