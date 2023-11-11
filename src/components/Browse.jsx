
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContaineer from "./MainContaineer";
import SecondaryContaineer from "./SecondaryContaineer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";



const Browse = () => {



  //This is custom hook
  useNowPlayingMovies();

  const gptView = useSelector((store)=>store.gpt?.gptShow);
  

  



  return (
    <div className="">
      <div className="">
        <Header />
        {
          !gptView ? <>
          <MainContaineer/>
          <SecondaryContaineer/>
          
          </> : <><GptSearchPage/>
          
          </>
        }
       
      </div>
    </div>
  );
};

export default Browse;
