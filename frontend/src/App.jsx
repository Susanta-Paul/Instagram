import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import RootLayout from './RootLayout'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
      </Route>
    )
  )

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
