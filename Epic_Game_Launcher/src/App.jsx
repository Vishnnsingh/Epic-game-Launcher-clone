// import { useState } from 'react'
import DateCreateAccount from "../src/Components/DateCreateAccount/DateCreateAccount"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "../src/Conatiner/Pages/Login/Login"
import HomeMain from "../src/Conatiner/Pages/HomeMain/HomeMain"

import './App.css'
import Layout from './Conatiner/Layout/Layout'
import Register from "./Components/Register/Register"

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
  },
  {
    path: "/date",
    element: <DateCreateAccount />
},

{
  path: "/reg",
  element: <Register />
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
