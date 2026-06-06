import React from 'react'
import reactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const route=createBrowserRouter([
  {
    path:"/",
    element:<App />
  }
], {
  basename: "/amazonClone"
})

reactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
