import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames:null,
    searchItem:null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieNames:(state,action)=>{
      state.movieNames=action.payload;
    },
    addSearchItem:(state,action)=>{
      state.searchItem=action.payload;
    }
  },
});
export const { toggleGptSearchView,addMovieNames, addSearchItem} = gptSlice.actions;
export default gptSlice.reducer;