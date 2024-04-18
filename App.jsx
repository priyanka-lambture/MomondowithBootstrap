import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Hotel from './components/Hotel/Hotel';
import PageNotFound from './components/PagenotFound/PageNotFound';
import Car_Hire from './components/Car Hire/Car_Hire';
import Inspiration from './components/Inspiration/Inspiration';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/hotel' element={<Hotel/>}/>
      <Route path='/carhire' element={<Car_Hire/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/inspiration' element={<Inspiration/>}/>

      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
