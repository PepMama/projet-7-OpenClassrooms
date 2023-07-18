import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/index.css';
import Home, {loader as AppLoader} from './pages/home/Home.js';
import Logement, {loader as LogementLoader} from './pages/logement/Logement';
import Main from './layouts/main/Main';
import ErrorPage from './pages/page-404/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "",
        element: <Home/>,
        loader: AppLoader
      },
      {
        path:"logement/:id",
        element: <Logement/>,
        loader: LogementLoader
      }
    ],
    errorElement: <ErrorPage/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

