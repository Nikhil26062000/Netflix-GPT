import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { lang } from '../utils/constant';
import { useSelector } from 'react-redux';

const GptSearchPage = () => {
  const gptLang = useSelector((store)=>store.language.langValue);
  return (
    <div className=" w-screen h-full absolute ">

    
    <div className='mt-32 absolute'>
    <div className="w-screen flex justify-center gap-5 h-20">
    <TextField className="gptSearchBar  w-[50%] text-white " id="outlined-basic" label={lang[gptLang].gptSearchPlaceholder} variant="outlined" />
    <Button className="gptPageSearchButton h-[55%]" variant="contained">{lang[gptLang].search}</Button>
    </div>
       
    </div>
    </div>
  )
}

export default GptSearchPage