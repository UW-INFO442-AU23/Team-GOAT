import React from 'react';
import About from './components/About/about';
import Home from './components/Home/home'
import Navbar from './components/Navbar/navbar';
import Tag from './components/Tag/tag';
import Footer from './components/Footer/footer';
import Resources from './components/Resources/resources';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
      <div>
        <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Tag" element={<Tag />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Resources" element={<Resources />} />
          </Routes>
        </Router> 
      </div>
    );
  }