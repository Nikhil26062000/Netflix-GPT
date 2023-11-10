import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import openai from "../utils/openai";

import { lang } from "../utils/constant";
import { useSelector } from "react-redux";

const GptSearchPage = () => {
  const searchText = useRef(null);
  const gptLang = useSelector((store) => store.language.langValue);

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    const query =
      "Act as a movie Recommendation System and suggest some movies for the query." +
      searchText.current.value +
      ".only give a names of 5 movies , comma seperated like the example result ahead. Example Result : Gadar, Don , Golmal , Koi mil gya , Sholay";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults);
  };
  return (
    <div className=" w-screen h-full absolute ">
      <div className="mt-32 absolute">
        <div className="w-screen flex justify-center gap-5 h-20">
          <input
            ref={searchText}
            className="gptSearchBar  w-[50%] border border-black h-10 "
            id="outlined-basic"
            label={lang[gptLang].gptSearchPlaceholder}
            variant="outlined"
          />
          <Button
            className="gptPageSearchButton h-[55%]"
            variant="contained"
            onClick={handleGptSearch}
          >
            {lang[gptLang].search}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
