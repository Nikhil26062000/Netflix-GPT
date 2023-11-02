import React from 'react'
import Button from '@mui/material/Button';
//import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const VideoTitle = ({title,overview}) => {
  console.log(overview);
  return (
    <div className='pt-52 px-12 absolute top-0 left-0 z-30 bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='text-white py-6 text-lg w-2/5'>{overview}</p>
        <div className="flex gap-3">
        <Button className='playButton hover:opacity-80' variant="contained"><PlayArrowIcon/>Play</Button>
        <Button className='moreInfoButton hover:opacity-80' variant="contained"><InfoOutlinedIcon/>More Info</Button>
        </div>
        
    </div>
  )
}

export default VideoTitle