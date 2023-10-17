import React, { useState } from 'react'
import '../index.css'
import Header from './Header'

const Login = () => {

    const [isSign,setIsSign] = useState(true);

    const changeSignIn =()=> {
        setIsSign(!isSign);
    }
  return (
    <div className='loginPage'>
        <Header />
        <div className='backgroundImage absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='backgroundImage' />
        </div>

        <form className='formStyle p-12 bg-black absolute w-[400px] my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

            <h1 className='font-bold text-3xl py-4'>{isSign ? "Sign In":"Sign Up"}</h1>

            {!isSign && <input type="text" placeholder="Full Name" className="inputBox p-4 my-4 w-full"/>}

            <input type="text" placeholder="Email Address" className="inputBox p-4 my-4 w-full"/>

            <input type="password" placeholder="Password" className="inputBox p-4 my-4 w-full"/>

            

            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSign ? "Sign In":"Sign Up"}</button>

            <p className='py-4 cursor-pointer ' onClick={changeSignIn}>{isSign ? "New to Netflix ❓ Sign Up Now":"Already Signed Up ❓  GO & ENJOY 😃"}</p>
            
        </form>
    </div>
  )
}

export default Login