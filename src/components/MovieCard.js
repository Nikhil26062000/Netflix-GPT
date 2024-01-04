import React from 'react'
import { IMG_URL } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  return (
    <div className="anim w-40 rounded-lg cursor-pointer scale-[.9] max-sm:w-32 hover:scale-[1]">
         <img className=" w-[300px] rounded-sm hover:border border-white" src={IMG_URL+posterPath} alt="imgUrl" />
    </div>
  )
}

export default MovieCard