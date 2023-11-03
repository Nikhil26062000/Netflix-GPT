import { signOut } from 'firebase/auth';
import React,{ useEffect }  from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logo, userIcon } from '../utils/constant';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

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

    {user && <div className="flex justify-between py-5 gap-3 pr-8">
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