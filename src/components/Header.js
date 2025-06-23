import React, { useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL,LOGO_URL1, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen,setIsOpen]=useState(false);
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.gpt.showSearch);
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
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <>
    <div className="absolute h-[15vh] md:h-auto w-screen md:px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-row justify-between">
      <img className=" w-36 h-10 md:h-auto md:w-48 my-4 mx-4 md:mx-0" src={LOGO_URL1} alt="logo" />
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
            onClick={()=>setIsOpen(!isOpen)}
          />}
        </div>
      )}
    </div>
    {isOpen&&
     <div className='absolute z-10 right-2 top-20 bg-gray-800  border-gray-600 rounded-md'>
      <p className='font-normal py-2 px-3 text-white'>{user?.displayName}</p>
      <button onClick={ handleSignOut} className=" text-center w-full font-normal py-1 px-3 border-t text-gray-400 hover:text-white ">
     Sign Out
    </button>
      </div>}
    </>
  )
}

export default Header