import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statics from './components/Statics/Statics';
import CardDetails from './components/CardDetails/CardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader:()=>fetch('../cards.json')
      },
      {
        path:"/statistics",
        element:<Statics></Statics>
      },
      {
        path:"/card/:id",
        element:<CardDetails></CardDetails>,
        loader:()=>fetch('../cards.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
