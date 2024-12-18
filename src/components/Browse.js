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
<<<<<<< HEAD
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useUpcomingMovies from '../hooks/useUpcomingMovies';
<<<<<<< HEAD
=======
>>>>>>> 9ade620 (Completed the browse page)
=======
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
>>>>>>> 97c48da (Added GPT search page & language change functionality)
=======
import useTvShows from '../hooks/useTvshows';
import Footer from './Footer';
>>>>>>> fa00bf1 (Read Me File Added)

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
<<<<<<< HEAD
<<<<<<< HEAD
  useUpcomingMovies();
  useTvShows();
  const showSearch = useSelector((store) => store.gpt.showSearch);
  const randomInteger = Math.floor(Math.random() * 4);
  return (
    <>
      <div className='h-screen flex flex-col'>
      <Header/>
         <div className='flex-grow'>
         {showSearch ? (
        <GptSearch />
         ) : (
        <>
          <MainContainer randomInteger={randomInteger}/>
          <SecondaryContainer />
        </>
      )}
<<<<<<< HEAD
=======
=======
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
>>>>>>> 97c48da (Added GPT search page & language change functionality)
  const randomInteger = Math.floor(Math.random() * 4);
  return (
    <>
         <Header/>
<<<<<<< HEAD
         <MainContainer randomInteger={randomInteger}/>
         <SecondaryContainer/>
         {console.log("called")}
>>>>>>> 9ade620 (Completed the browse page)
=======
         {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer randomInteger={randomInteger}/>
          <SecondaryContainer />
        </>
      )}
>>>>>>> 97c48da (Added GPT search page & language change functionality)
=======
         </div>
      <Footer/>
      </div>
>>>>>>> fa00bf1 (Read Me File Added)
    </>
  )
}

export default Browser
