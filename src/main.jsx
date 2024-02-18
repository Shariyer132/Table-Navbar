import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import ProductDashboard from './Components/Home/ProductDashboard/ProductDashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
          path: "/",
          element: <Home/>
      }
  ]
  },
  {
    path: "/dashboardProduct",
    element: <Dashboard/>,
    children:[
      {
          path: "/dashboardProduct",
          element: <ProductDashboard/>
      }
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
