// import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "../src/Conatiner/Pages/Login/Login"
import HomeMain from "../src/Conatiner/Pages/HomeMain/HomeMain"
import './App.css'
import Layout from './Conatiner/Layout/Layout'

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Login />
  },
   
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomeMain />
      }
    ]
  }


  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
