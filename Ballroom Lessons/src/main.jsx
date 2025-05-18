import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Booking from './Pages/Booking';
import Pricing from './Pages/Pricing';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/About' element = {<About/>}/>
        <Route path ='/Prices' element = {<Pricing/>}/>
        <Route path ='/Booking' element = {<Booking/>}/>
        <Route/>
      </Routes>
    </Router>
  </StrictMode>,
)
