import { signOut } from 'firebase/auth';
import React,{ useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGE, logo, userIcon } from '../utils/constant';
import { changeGptShow } from '../utils/gptSlice';
import {changeLangValue} from '../utils/multiLangSlice'


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showGptSearch,setShowGptSearch] = useState(false);
  const user = useSelector((store) => store.user)
  const gptView = useSelector((store)=>store.gpt?.gptShow);

  //handling Gpt Search
  const handleGptSearch = () => {
  
   setShowGptSearch(!showGptSearch);
   dispatch(changeGptShow(showGptSearch))
  }

  //handling multilang features
  const handleLangChange = (e) => {
      dispatch(changeLangValue(e.target.value))
  }

  //Building Signout logic Using signOut API
    const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
       
      }).catch((error) => {
        // An error happened.
      });
    }



    useEffect(() => {
     const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          // ...
          navigate("/Netflix-GPT/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/Netflix-GPT/");
        }
      });
      
      return ()=>unsubscribe();

    }, []);
  return (
    <div className='Header flex bg-gradient-to-b from-black justify-between  fixed w-full'>
    <div>
        <img className='w-44 py-2 px-4' src={logo} alt="logo"/>
    </div>

    {user && <div className="flex justify-between py-5 gap-5 pr-8">

    
     { gptView && <select className="rounded-lg" onChange={handleLangChange}>
        {
          SUPPORTED_LANGUAGE.map((lang)=> <option value={lang.identifier} key={lang.identifier} >{lang.name}</option>)
        }
      </select>}
     
    

    <Button className='gptButton' variant="contained" onClick={handleGptSearch}>
         {gptView ? "Home Page" : "GptSearch"}
        </Button>

        <img
          src={userIcon}
          alt="userIcon"
        />
        <Button className='SignoutButton' variant="outlined" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>}
      </div>
  )
}

export default Header