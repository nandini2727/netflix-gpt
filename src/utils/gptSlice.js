import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
<<<<<<< HEAD
    movieNames:null,
    searchItem:null
=======
>>>>>>> 97c48da (Added GPT search page & language change functionality)
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
<<<<<<< HEAD
    addMovieNames:(state,action)=>{
      state.movieNames=action.payload;
    },
    addSearchItem:(state,action)=>{
      state.searchItem=action.payload;
    }
  },
});
export const { toggleGptSearchView,addMovieNames, addSearchItem} = gptSlice.actions;
=======
  },
});
export const { toggleGptSearchView } = gptSlice.actions;
>>>>>>> 97c48da (Added GPT search page & language change functionality)
export default gptSlice.reducer;