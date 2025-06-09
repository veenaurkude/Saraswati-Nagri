// import { useState } from 'react'
// import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layouts from './pages/Layouts/Layouts';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="our-layouts" element={<Layouts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
