import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Details from './components/Details'
import Hello from './components/Hello'

function App() {
  return (
    <>
   <Navbar/>
   <div className='mainsection'>

   <Hello/> 
   <Details/>
   </div>
    </>
  )
}

export default App