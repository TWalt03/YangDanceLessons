import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Booking from './Pages/Booking';
import Pricing from './Pages/Pricing';
import Gallery from './Pages/Gallery';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/About' element = {<About/>}/>
        <Route path ='/Prices' element = {<Pricing/>}/>
        <Route path ='/Booking' element = {<Booking/>}/>
        <Route path ='/Gallery' element = {<Gallery/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
