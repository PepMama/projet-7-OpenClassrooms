import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/index.css';
import App, {loader as AppLoader} from './components/App';
import Main from './layouts/main/Main';
import ErrorPage from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "",
        element: <App/>,
        loader: AppLoader
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

