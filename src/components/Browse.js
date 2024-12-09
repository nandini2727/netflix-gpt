<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect } from 'react'
>>>>>>> 9ade620 (Completed the browse page)
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
<<<<<<< HEAD
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useUpcomingMovies from '../hooks/useUpcomingMovies';
=======
>>>>>>> 9ade620 (Completed the browse page)

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
<<<<<<< HEAD
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const randomInteger = Math.floor(Math.random() * 4);
  return (
    <>
         <Header/>
         {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer randomInteger={randomInteger}/>
          <SecondaryContainer />
        </>
      )}
=======
  const randomInteger = Math.floor(Math.random() * 4);

   console.log("Random integer:", randomInteger);
  return (
    <>
         <Header/>
         <MainContainer randomInteger={randomInteger}/>
         <SecondaryContainer/>
         {console.log("called")}
>>>>>>> 9ade620 (Completed the browse page)
    </>
  )
}

export default Browser
