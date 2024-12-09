import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const randomInteger = Math.floor(Math.random() * 4);

   console.log("Random integer:", randomInteger);
  return (
    <>
         <Header/>
         <MainContainer randomInteger={randomInteger}/>
         <SecondaryContainer/>
         {console.log("called")}
    </>
  )
}

export default Browser
