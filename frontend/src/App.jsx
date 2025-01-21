import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Explore from "./pages/Explore.jsx";
import Upload from "./pages/Upload.jsx";
import RootLayout from './RootLayout'
import Login from './pages/Login.jsx'
import Signup from './Components/Signup.jsx'
import Profile from './pages/profile.jsx'
import UserProtected from './pages/UserProtected.jsx'
import Message from './pages/Message.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Fragment> 
        <Route path='/' element={<RootLayout />}> 
          <Route index element={<UserProtected><Home /></UserProtected>} /> 
          <Route path='explore' element={<UserProtected><Explore /></UserProtected>} /> 
          <Route path='upload' element={<UserProtected><Upload /></UserProtected>} /> 
          <Route path='profile' element={<UserProtected><Profile /></UserProtected>} /> 
          <Route path='messages' element={<UserProtected><Message /></UserProtected>} /> 
          </Route> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} /> 
      </Fragment>
    )
  )

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
