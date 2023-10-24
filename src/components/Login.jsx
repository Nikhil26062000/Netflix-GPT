import React, { useState, useRef } from "react";
import "../index.css";
import Header from "./Header";
import { validate } from "../utils/validate";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const [errorMessage , setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const clickedSignInSignUp = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSign){
        //SignUp logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Sign Up successfully");
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("Error : "+errorCode, errorMessage);
    // ..
  })
    }else{
        //signIn logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Sucessful sign in");
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+"-"+errorMessage);
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
        />
      </div>

      <form onSubmit={(e)=> e.preventDefault() } className="formStyle p-12 bg-black absolute w-[400px] my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>

        {!isSign && (
          <input
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
