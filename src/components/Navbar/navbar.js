import React from "react";
import './navbar.css'

export default function Navbar() {
    return (
      <nav>
        <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
        <ul>
          <p className="navbar-content">
            <strong className="campus-care">CampusCare</strong>
            <a href="/">Map</a>
            <a href="About">About</a>
            <a href="Resources">Resources</a>
          </p>
        </ul>
      </nav>
    );
  }
  
