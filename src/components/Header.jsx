import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux'


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  //Building Signout logic Using signOut API
    const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/Netflix-GPT/')
      }).catch((error) => {
        // An error happened.
      });
    }
  return (
    <div className='flex bg-gradient-to-b from-black justify-between z-10 absolute w-full'>
    <div className="Header">
        <img className='w-44 py-2 px-4' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    </div>

    {user && <div className="flex justify-between my-5 gap-3 mr-8">
        <img
          src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdVyVQ76iuDREwlcbamzBaFydSGzJ-76wTIkKTR4oVWbbERbJkGL_BVQ1zHcRATMF5a8ogBZGWYb03Z_WY5Df-Ax--ImUp0.png?r=201"
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