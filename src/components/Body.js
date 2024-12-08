<<<<<<< HEAD
import React from 'react'
import Login from './Login'
import { createBrowserRouter} from 'react-router-dom'
import Browse from './Browse'
import{RouterProvider} from "react-router-dom"

const Body = () => {
=======
import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter} from 'react-router-dom'
import Browser from './Browser'
import{RouterProvider} from "react-router-dom"
import {auth} from "../utils/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser,removeUser} from "../utils/userSlice"

const Body = () => {
  const dispatch = useDispatch();
>>>>>>> e7f9588 (firebase integration and signin & signout added)
  const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
<<<<<<< HEAD
        path:"/browse",
        element:<Browse/>
    }
  ]);
  
=======
        path:"/browser",
        element:<Browser/>
    }
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
>>>>>>> e7f9588 (firebase integration and signin & signout added)

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
