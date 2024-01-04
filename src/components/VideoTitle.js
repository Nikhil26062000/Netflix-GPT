import React from 'react'
import Button from '@mui/material/Button';
//import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const VideoTitle = ({title,overview}) => {
  
  return (
    <div className='pt-52 px-12 absolute top-0 left-0 z-30 bg-gradient-to-r from-black aspect-video max-sm:pt-72 max-sm:px-6'>

    
        <h1 className='text-6xl font-bold text-white max-md:text-3xl max-xl:text-4xl max-sm:text-sm'>{title}</h1>
        <p className='text-white py-6 text-lg w-2/5 max-lg:w-[95%] max-xl:w-4/5 max-sm:text-xs max-sm:w-[64%]'>{overview}</p>
        <div className="flex gap-3 max-sm:mt-0 max-sm:mb-8">
        <Button className='playButton hover:opacity-80 max-sm:text-[8px]' variant="contained"><PlayArrowIcon/>Play</Button>
        <Button className='moreInfoButton hover:opacity-80 max-sm:text-xs' variant="contained"><InfoOutlinedIcon/>More Info</Button>
        </div>

        
    </div>
  )
}

export default VideoTitle