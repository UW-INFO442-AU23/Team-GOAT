import React from 'react';
import About from './components/About/about.js';
import Home from './components/Home/home.js'
// import Resources from './components/resources.js'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
      <div>
        <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
  
          </Routes>
        </Router> 
      </div>
    );
  }