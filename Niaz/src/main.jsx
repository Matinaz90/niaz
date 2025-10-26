import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Main_page from './main_page.jsx'
import Home from './home/home.jsx'
import Car from './car/car.jsx'
import Employ from './employ/employ.jsx'
import Add_User from "./1_topbar/createUser/CreateUser.jsx";



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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
