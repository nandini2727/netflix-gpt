import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useDispatch} from "react-redux"
import {addUser} from "../utils/userSlice"
import { USER_LOGO,BG_URL } from '../utils/constants';

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true);
    const [isErrorMsg,setIsErrorMsg]=useState(null);
    const dispatch=useDispatch();
    const email=useRef("");
    const password=useRef("");
    const name=useRef("")
  

    const handleButtonClick=()=>{
        const message=checkValidate(email.current.value,password.current.value,name.current.value);
        setIsErrorMsg(message);
        if(message) return 
        if(isSignIn){
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            

          })
          .catch((error) => {
            const errorCode = error.code;
            setIsErrorMsg(errorCode);
          });
        }
        else{
          createUserWithEmailAndPassword(auth,email?.current?.value,password?.current?.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
             updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_LOGO,
             })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setIsErrorMsg(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            setIsErrorMsg(errorCode)
            // ..
          });
        }



    }
    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div className=''>
      <Header/>
      <div className='bg-black absolute'>
      <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      {/* <div className="flex flex-col items-center justify-center h-screen bg-login-screen"> */}
        <form onSubmit={(e)=>e.preventDefault()} className='bg-[rbga(0,0,0,0.1)] w-full md:w-3/12 top-32 mx-auto right-0 left-0 relative flex flex-col items-center gap-5 justify-start  bg-[rgba(0,0,0,0.8)] py-10'>
                <h1 className='text-white text-[2rem] font-bold text-left w-9/12 '>{isSignIn ? "Sign In":"Sign Up"}</h1>

                {  !isSignIn && 
                    <input
                    ref={name}
                     type="text"
                 placeholder='Full Name' 
                 className=' p-4  text-white placeholder:text-gray-300 bg-[rgba(255,255,255,0.05)] w-9/12 border-gray-500 rounded-sm border text-base'>
                 </input>}


                <input 
                ref={email}
                type="text"
                 placeholder='Email Address' 
                 className=' p-4  text-white placeholder:text-gray-300 bg-[rgba(255,255,255,0.05)] w-9/12 border-gray-500 rounded-sm border text-base'>
                 </input>

                <input 
                ref={password}
                type="password"
                 placeholder='Password'
                  className=' p-4  text-white placeholder:text-gray-300 bg-[rgba(255,255,255,0.05)] w-9/12 border-gray-500 rounded-sm border  text-base '>
                  </input>
                <p className='text-red-600 text-sm font-semibold w-9/12 text-left '>{isErrorMsg}</p>
                <button className='w-9/12  bg-[#E50914] text-white py-2 rounded-md  font-semibold hover:bg-[#e50914dd]' onClick={handleButtonClick}>{isSignIn ? "Sign In":"Sign Up"}</button>

                <p className='text-gray-300 w-9/12 text-md'>{isSignIn ? "New to Netflix? ":"Already Registered? "} 
                <span className='underline cursor-pointer text-left font-semibold' onClick={toggleSignInForm}>{isSignIn ? "Sign Up Now":"Sign In Now"}</span></p>
        </form>   
      </div>
      
    //  </div>
  )
}

export default Login
