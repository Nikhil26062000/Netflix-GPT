import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import openai from "../utils/openai";
import error2 from '../Images/error2.webp'

import { lang } from "../utils/constant";
import { useSelector } from "react-redux";

const GptSearchPage = () => {
  const searchText = useRef(null);
  const gptLang = useSelector((store) => store.language.langValue);
  const [showErrorMessage,setShowErrorMessage] = useState(false);

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    try {
      const query =
        "Act as a movie Recommendation System and suggest some movies for the query." +
        searchText.current.value +
        ".only give a names of 5 movies , comma seperated like the example result ahead. Example Result : Gadar, Don , Golmal , Koi mil gya , Sholay";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });


      // Check if the response is successful
      if (!gptResults.ok) {
        throw new Error(gptResults.message); // You can customize the error message
      }
    } catch (error) {
      // Handle the error
      console.error("Error fetching data:", error.message);
      setShowErrorMessage(true);

    } finally {
      // Set loading to false, as the request is complete
      console.log("Complete");
    }

    
  };
  return (
    <div className=" w-screen h-full absolute ">
      <div className="absolute">

      {showErrorMessage && <div className="bg-slate-600">
          {/* <h1>Oooops !!! Something went wrong .Api Error 😠</h1> */}
          <img src={error2} className="w-[100vw] h-[100vh]" alt="Error"/>
        </div>}

      { !showErrorMessage && <div className="w-screen flex justify-center gap-5 h-20 mt-32">
          <input
            ref={searchText}
            className="gptSearchBar  w-[50%] border border-black h-14 pl-4 rounded-md "
            id="outlined-basic"
            placeholder={lang[gptLang].gptSearchPlaceholder}
            variant="outlined"
          />
          <Button
            className="gptPageSearchButton h-[55%]"
            variant="contained"
            onClick={handleGptSearch}
          >
            {lang[gptLang].search}
          </Button>
        </div>}

        
      </div>
      
    </div>
  );
};

export default GptSearchPage;
