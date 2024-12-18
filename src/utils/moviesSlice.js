import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    tvShows:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
    },
    addTvShow: (state, action) => {
      state.tvShows= action.payload;
    },
    addUpcomingMovies: (state, action) => {
     state.upcomingMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies,addTvShow } = moviesSlice.actions;
export default moviesSlice.reducer;