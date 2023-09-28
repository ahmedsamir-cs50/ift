import React from 'react'



// import { Footer } from './Component/Utility/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar/NavBar'
import { Nav2 } from './Components/NavBar/Nav2'

export const App = () => {
  
  return (
   
    <div className='project-wrapper'>
       <BrowserRouter>
       
   
     <>
     <Nav2  />
     <Routes>
   
    <Route index element={<HomePage/>}/>
   
    </Routes>
    </>
     
       
    {/* <Footer/> */}
    </BrowserRouter>
  </div>
  )
}
