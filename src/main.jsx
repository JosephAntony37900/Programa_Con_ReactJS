import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import App from './App.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Inicio from './components/pages/Home.jsx';
import Planes from './components/pages/Planes.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
  },
  {
    path:"/inicio",
    element:<Inicio/>,
  },
  {
    path: "/planes",
    element: <Planes/>,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
