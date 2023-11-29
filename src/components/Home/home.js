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
    const handleChange = (event) => {
        setCheckedItems({
          [event.target.id]: event.target.checked,
        });
        if(event.target.checked === false) {
          setData(locationData);
        } else {
          let id = event.target.id;
        if(id === '1') {
          let newData= locationData;
          setData(newData);
        } else if(id === '2') {
          let newData = locationData.filter(row => row.Gender === 'TRUE');// e.g. row => row.Gender === 'TRUE' AND row => row.WestCampus === 'TRUE'
          setData(newData);
        } else if(id === '3') {
          let newData = locationData.filter(row => row.ADACompliant === 'TRUE');
          setData(newData);
        } else if(id === '4'){
          let newData = locationData.filter(row => row.Campus === 'North');
          setData(newData);
        } else if(id === '5'){
          let newData = locationData.filter(row => row.Campus === 'East');
          setData(newData);
        } else if(id === '6'){
          let newData = locationData.filter(row => row.Campus === 'South');
          setData(newData);
        } else if(id === '7'){
          let newData = locationData.filter(row => row.Campus === 'West');
          setData(newData);
        } else if(id === '8'){
            let newData = locationData.filter(row => row.Campus === 'Central');
            setData(newData);
        } else {
          let idArray = []
          for(let i = 0; i < features.length; i++) {
            if(features[i].id === id) {
                idArray = features[i].id;
            }
          }
          let newData = data.filter(row => idArray.includes(row.id));
          setData(newData);
        }
    }
    }

    return (
        <section>
           <div className="container">
            <h1>CampusCare</h1>
            <text>Find Menstrual Products on University of Washington Seattle Campus</text>
            </div>
            <div class="main-wrapper">
                <div class="map-and-wrapper">
                    <div class="map-container">
                      <Map data={data} />
                    </div>
                    <div className="wrapper">
                    <div className="accordion">
                        {filterType.map((item, i) => (
                            <div className="item" key={i}>
                                <div className="title" onClick={() => toggle(i)}>
                                    <h2 className="filter-title">{item.title}</h2>
                                    <span>{selected === i ? <VscChevronUp /> : <VscChevronDown />}</span>
                                </div>
                                <div className={selected === i ? 'content' : 'content show'}>
                                    <div className="feature-grid">
                                        {features.map((feature) => (
                                            <label key={feature.id} className="feature-label">
                                                <input
                                                    className="checkboxes"
                                                    id={feature.id}
                                                    type="radio"
                                                    checked={checkedItems[feature.id] || false}
                                                    onChange={handleChange}
                                                />
                                                {feature.value}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
                </div>


            <footer>
                <div>
                    <p>&copy; CampusCare 2023 INFO 442 Team GOAT</p>
                </div>
            </footer>

        </section>
      )
}

const filterType = [
    {title: 'Filters'},
]

const features = [
    { id: '1', value: 'View All'},
    { id: '2', value: 'All Gender'},
    { id: '3', value: 'ADA Compliant'},
    { id: '4', value: 'North Campus'},
    { id: '5', value: 'East Campus'},
    { id: '6', value: 'South Campus'},
    { id: '7', value: 'West Campus'},
    { id: '8', value: 'Central Campus'}
  
];


export default Home;