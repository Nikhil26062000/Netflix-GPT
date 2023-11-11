import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGE, logo, userIcon } from "../utils/constant";
import { changeGptShow } from "../utils/gptSlice";
import { changeLangValue } from "../utils/multiLangSlice";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showGptSearch, setShowGptSearch] = useState(false);
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt?.gptShow);

  //handling Gpt Search
  const handleGptSearch = () => {
    setShowGptSearch(!showGptSearch);
    dispatch(changeGptShow(showGptSearch));
  };

  //handling multilang features
  const handleLangChange = (e) => {
    dispatch(changeLangValue(e.target.value));
  };

  //Building Signout logic Using signOut API
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    return () => unsubscribe();
  }, []);
  return (
    <div className="Header flex bg-gradient-to-b from-black justify-between  fixed w-full">
      <div>
        <img className="w-44 py-2 px-4" src={logo} alt="logo" />
      </div>

      {user && (
        <div className="flex justify-between py-5 gap-5 pr-8">
          {gptView && (
            <select
              className="rounded-sm bg-transparent"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <Button
            className="gptButton"
            variant="contained"
            onClick={handleGptSearch}
          >
            {gptView ? "Home Page" : "GptSearch"}
          </Button>

          <div className="userIcon">
            <img className=" rounded-sm" src={userIcon} alt="userIcon" />

            <div className="hoverDiv w-[250px] h-[230px] bg-transparent  ">
              {/* empty side */}
              <div className="arrowIcon w-[250px] h-[20px] pr-3 bg-transparent flex justify-end">
             <ArrowDropUpIcon/>
              </div>

              {/* all the list  */}
              <div className="p-5 bg-gradient-to-tr from-black flex flex-col rounded-md text-white">
                {/* div contain logo and profile at flex */}
                <div className="flex gap-4">
                  <img className="pl-2 rounded-r-sm" src={userIcon} alt="userProfile" />
                  <li className="list-none hover:underline">{user.displayName}</li>
                </div>

                <li className="list-none px-2 pt-3 hover:underline">
                  <CreateOutlinedIcon className="icon" fontSize="medium" />
                  Manage Profile
                </li>
                <li className=" list-none px-2 pt-3 hover:underline">
                  <PortraitOutlinedIcon className="icon" fontSize="medium" />
                  Transfer Profile
                </li>
                <li className="list-none px-2 pt-3 hover:underline">
                  <HelpOutlineOutlinedIcon className="icon" fontSize="medium" />
                  Account
                </li>
                <li className="list-none px-2 pt-3 pb-2 hover:underline">
                  <PersonOutlineOutlinedIcon
                    className="icon"
                    fontSize="medium"
                  />
                  Help Center
                </li>

                <hr className="pt-2" />

                <p className="px-2 pt-2 text-center hover:underline" onClick={handleSignOut}>
                  Sign out of Netflix
                </p>
              </div>
            </div>
          </div>

          {/* <Button className='SignoutButton' variant="outlined" onClick={handleSignOut}>
          Sign out
        </Button> */}
        </div>
      )}
    </div>
  );
};

export default Header;
