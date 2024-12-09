import {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./userSlice";
<<<<<<< HEAD
<<<<<<< HEAD
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
=======
>>>>>>> e7f9588 (firebase integration and signin & signout added)
=======
import moviesReducer from "./moviesSlice"
>>>>>>> 9ade620 (Completed the browse page)
const appStore =configureStore(
    {
        reducer:{
            user:userReducer,
<<<<<<< HEAD
<<<<<<< HEAD
            movies:moviesReducer,
            gpt: gptReducer,
            config: configReducer,
=======
>>>>>>> e7f9588 (firebase integration and signin & signout added)
=======
            movies:moviesReducer,
>>>>>>> 9ade620 (Completed the browse page)
        },
    }
)
export default appStore;