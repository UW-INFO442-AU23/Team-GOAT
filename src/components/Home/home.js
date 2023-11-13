import React from "react";
import './home.css'
import Map from '../Map/map'

import {locationData} from '../locationdata.js'
import { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";

function Home() {

    const [selected, setSelected] = useState(false);
    const [checkedItems, setCheckedItems] = useState(false);
    const [data, setData] = useState(locationData);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(false)
        }
        setSelected(i)
    }

    

    return (
        <section>

            <div className="container">
                <h1>CampusCare</h1>
                <div> <Map data={data}/></div>
               
            </div>
            
            <footer>
                <div>
                    <p>&copy; CampusCare 2023 INFO 442 Team GOAT</p>
                </div>
            </footer>

        </section>
      )
}

export default Home;
