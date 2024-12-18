import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTvShows from '../hooks/useTvshows';
import Footer from './Footer';

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
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
         </div>
      <Footer/>
      </div>
    </>
  )
}

export default Browser