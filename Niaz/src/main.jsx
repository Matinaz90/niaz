import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalProvider } from "./GlobalContext";
import { Navigate } from 'react-router-dom';
import './index.css'

import Main_page from './main_page.jsx'
import Main_page_teach from './mainPage_teach/main_page_teach.jsx'
import Pages from './pages.jsx'
import Add_User from "./createUser/CreateUser.jsx";
import AddNiaz from "./addNiaz/AddNiaz.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main_page />,
  },
  {
    path: '/home/*',
    element: <Pages rightBar="1"/>,
  },
  {
    path: '/car/*',
    element: <Pages rightBar="2"/>,
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
    </GlobalProvider>
  </React.StrictMode>
);
