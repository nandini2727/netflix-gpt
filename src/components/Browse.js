import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
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
    </>
  )
}

export default Browser
