import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App