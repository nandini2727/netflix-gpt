<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import Login from './Login'
import { createBrowserRouter} from 'react-router-dom'
import Browse from './Browse'
import{RouterProvider} from "react-router-dom"

const Body = () => {
=======
import React, { useEffect } from 'react'
=======
import React from 'react'
>>>>>>> 9ade620 (Completed the browse page)
import Login from './Login'
import { createBrowserRouter} from 'react-router-dom'
import Browse from './Browse'
import{RouterProvider} from "react-router-dom"

const Body = () => {
<<<<<<< HEAD
  const dispatch = useDispatch();
>>>>>>> e7f9588 (firebase integration and signin & signout added)
=======
>>>>>>> 9ade620 (Completed the browse page)
  const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
<<<<<<< HEAD
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
=======
        path:"/browse",
        element:<Browse/>
    }
  ]);
  
>>>>>>> 9ade620 (Completed the browse page)

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
