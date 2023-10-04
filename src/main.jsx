import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from '../src/components/Home/Home.jsx';
import ErrorPage from '../src/components/ErrorPage.jsx';
import Donation from '../src/components/Donation/Donation.jsx';
import Statistics from '../src/components/Statistics/Statistics.jsx';
import Base from '../src/components/Base/Base';
import ShowDetails from '../src/components/ShowDetails/ShowDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('../data/donation.json'),
      },
      {
        path: '/donation',
        element: <Donation/>
      },
      {
        path: '/statistics',
        element: <Statistics/>,
        loader: () => fetch('../data/donation.json'),
      },
      {
        path: '/showDetails/:id',
        loader: () => fetch('../data/donation.json'),
        element: <ShowDetails/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
