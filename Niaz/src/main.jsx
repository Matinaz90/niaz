import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalProvider } from "./GlobalContext";
import { Navigate } from 'react-router-dom';
import './index.css'

import Main_page from './main_page.jsx'
import Main_page_teach from './mainPage_teach/main_page_teach.jsx'
import Home from './home/home.jsx'
import Car from './car/car.jsx'
import Employ from './employ/employ.jsx'
import Add_User from "./createUser/CreateUser.jsx";
import AddNiaz from "./addNiaz/AddNiaz.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main_page />,
  },
  {
    path: '/home/*',
    element: <Home />,
  },
  {
    path: '/car',
    element: <Car />,
  },
  {
    path: '/employ',
    element: <Employ />,
  },
  {
    path: '/adduser',
    element: <Add_User />,
  },
  {
    path: '/teach',
    element: <Main_page_teach />,
  },
  {
    path: '/addniaz',
    element: <AddNiaz />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
      <div id="blur_rightBarOpen" className='blur_rightBarOpen'></div>
      <div id="exitBtn" className="exit-btn">✕</div>
    </GlobalProvider>
  </React.StrictMode>
);
