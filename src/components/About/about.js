import React from "react";
import './about.css'

export default function About() {
    return (
        <section>
            <h1 className="about-h1">Welcome to Campus Care!</h1>
            <h2 className="about-h2">Resource for finding menstrual products on UW Seattle Campus</h2>
            <div className="about-paragraph">
                <p>Mission Statement
                <br>
                </br>
                Our mission is to empower young women with comprehensive knowledge about menstrual cycles and reproductive health. We aim to provide accurate information and resources to help them predict their upcoming periods and offer personalized recommendations, ensuring a more informed and comfortable experience throughout their journey.
                </p>
                <p>Meet Our Team
                <br>
                </br>
                Welcome to Team Goat! We are a group of dedicated individuals working on the INFO 442 project at the University of Washington.
                </p>
                <p>About Us
                <br>
                </br>
                Team GOAT is particularly interested in the third UN SDG: Good health and well-being. The menstruation cycle is a vital factor in women's health. Women all across the world struggle to access feminine hygiene products, and increasing accessibility to these products for UW students is a small step towards a more equitable community.
By using technology and visualization, students can much more easily navigate and access hygiene products without having to walk into an off-campus convenience store or pharmacy. Not only are there overlooked places to purchase these products, but there are also resources that provide them free of charge, and creating a tool that informs students of these different locations can drastically improve their quality of life.
                </p>
            </div>
            <footer>
                <div>
                    <p>&copy; CampusCare 2023 INFO 442 Team GOAT</p>
                </div>
            </footer>
        </section>
    )
}
