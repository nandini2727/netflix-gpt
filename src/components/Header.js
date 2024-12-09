import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
<<<<<<< HEAD
<<<<<<< HEAD
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

=======
>>>>>>> e7f9588 (firebase integration and signin & signout added)
=======
import { LOGO_URL } from '../utils/constants';
>>>>>>> 9ade620 (Completed the browse page)
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
<<<<<<< HEAD
<<<<<<< HEAD
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
=======
>>>>>>> 9ade620 (Completed the browse page)
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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
         <div className="flex p-2 justify-between">
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
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
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
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
>>>>>>> e7f9588 (firebase integration and signin & signout added)
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
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
  )
}

export default Header
