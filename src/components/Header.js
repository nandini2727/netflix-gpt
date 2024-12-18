import React, { useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 97c48da (Added GPT search page & language change functionality)
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

<<<<<<< HEAD
=======
>>>>>>> e7f9588 (firebase integration and signin & signout added)
=======
import { LOGO_URL } from '../utils/constants';
>>>>>>> 9ade620 (Completed the browse page)
=======
>>>>>>> 97c48da (Added GPT search page & language change functionality)
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen,setIsOpen]=useState(false);
  const user = useSelector((store) => store.user);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
=======
>>>>>>> 9ade620 (Completed the browse page)
=======
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
>>>>>>> 97c48da (Added GPT search page & language change functionality)
=======
  const showSearch = useSelector((store) => store.gpt.showSearch);
>>>>>>> fa00bf1 (Read Me File Added)
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
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
      return ()=> unsubscribe();
    });
  }, []);
<<<<<<< HEAD

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSearchClick = () => {
    // Toggle GPT Search
    setIsOpen(false)
    dispatch(toggleSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
=======


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
>>>>>>> e7f9588 (firebase integration and signin & signout added)
=======

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
>>>>>>> 9ade620 (Completed the browse page)
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
=======
    <>
    <div className="absolute h-[15vh] md:h-auto w-screen md:px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-row justify-between">
      <img className=" w-36 h-16 md:h-auto md:w-44 my-2 mx-4 md:mx-0" src={LOGO_URL} alt="logo" />
>>>>>>> fa00bf1 (Read Me File Added)
      {user && (
         <div className="flex p-2 justify-evenly h-[10vh]">
          {showSearch && (
            <select
              className=" m-2  bg-gray-900 rounded-md text-sm text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option className="" key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-2  mx-4 my-2 text-3xl  text-white rounded-lg"
            onClick={handleSearchClick}
          >
            {showSearch ? <FaHome/> : <IoSearch/>}
          </button>
          {!showSearch && <img
            className=" cursor-pointer w-12 h-12 m-2"
            alt="usericon"
            src={user?.photoURL}
<<<<<<< HEAD
          />
=======
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src= {LOGO_URL} 
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
>>>>>>> e7f9588 (firebase integration and signin & signout added)
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
=======
            onClick={()=>setIsOpen(!isOpen)}
          />}
>>>>>>> fa00bf1 (Read Me File Added)
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="Neflix_Logo" className='w-40'>
      </img> */}
>>>>>>> e7f9588 (firebase integration and signin & signout added)
=======
>>>>>>> 9ade620 (Completed the browse page)
    </div>
    {isOpen&&
     <div className='absolute z-10 right-2 top-20 bg-gray-800  border-gray-600 rounded-md'>
      <p className='font-normal py-2 px-3 text-white'>{user?.displayName}</p>
      <button onClick={ handleSignOut} className="  font-normal py-1 px-3 border-t text-gray-400 hover:text-white ">
     Sign Out
    </button>
      </div>}
    </>
  )
}

export default Header
