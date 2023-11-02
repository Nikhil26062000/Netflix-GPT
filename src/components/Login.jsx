import React, { useState, useRef } from "react";
import "../index.css";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgImage, userIcon } from "../utils/constant";


const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const [errorMessage, setErrorMessage] = useState();


  const dispatch = useDispatch();
  

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const clickedSignInSignUp = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSign) {
      //SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: userIcon
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            // Profile updated!
            // ...
           
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          // console.log("Sign Up successfully");
          setErrorMessage("SIGNED UP SUCCESSFULLY");
          // console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          // console.log("Error : " + errorCode, errorMessage);
          setErrorMessage("Something went Wrong");
          // ..
        });
    } else {
      //signIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log("Sucessful sign in");
          setErrorMessage("SIGNED IN SUCCESSFULLY");
          // console.log(user);
   
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode + "-" + errorMessage);
          setErrorMessage("Credentials not Valid...");
        });
    }
  };

  const changeSignIn = () => {
    setIsSign(!isSign);
  };
  return (
    <div className="loginPage">
      <Header />
      <div className="backgroundImage absolute">
        <img
          src={bgImage}

          alt="backgroundImage"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="formStyle p-12 bg-black absolute w-[400px] my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>

        {!isSign && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="inputBox p-4 my-4 w-full"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="inputBox p-4 my-4 w-full"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="inputBox p-4 my-4 w-full"
        />

        <p className="text-red-500">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={clickedSignInSignUp}
        >
          {isSign ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer " onClick={changeSignIn}>
          {isSign
            ? "New to Netflix ❓ Sign Up Now"
            : "Already Signed Up ❓  GO & ENJOY 😃"}
        </p>
      </form>
    </div>
  );
};

export default Login;
