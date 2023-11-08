import React from "react";
import './navbar.css'

export default function Navbar() {
    return(
        <nav>
          <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
            <ul>
                <p><strong>CampusCare</strong>
                    <a href="/">Home</a>
                    <a href="About">About</a>
                    <a href="Resources">Resources</a>
                 </p>
             </ul>
         </nav>
    )

}
