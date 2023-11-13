import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "./map.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Tag from '../Tag/tag.js'

export default function Map(props) {

    const locationData = props.data;

    let tagArray = [];
    var buildingArray = [];
    var length = locationData.length;

    for(var i = 0; i < length; i++){
        var key = i;
        var location = locationData[key]

        if(!buildingArray.includes(locationData[key.Name])){
            buildingArray.push(location.Name)

            var features = []
            for(var n = 0; n < length; n++){
                var key2 = n;
                if(locationData[key2]["Name"] === location["Name"]){
                    if(!features.includes(locationData[key2]["Name"])) {
                        features.push(locationData[key2]["Name"])
                        features.push(locationData[key2]["Hours"])
                        features.push(locationData[key2]["Address"])
                    }
                }
            }

        }

        tagArray.push( // This could use more polishing and styling to best suit our usecase
            <Marker position={[location["yPos"], location["xPos"]]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                <Popup>
                    <Tag name = {location.Name} address={location.Address} hours={location.Hours} feature={features}/> 
                </Popup>
            </Marker>
        )
    }

    return ( // This could use more polishing and styling to best suit our usecase
            <MapContainer center={[47.655548, -122.303200]} zoom={15} scrollWheelZoom={false} id={"map"} data-testId={"map"} maxZoom={20} minZoom={10}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {tagArray}
            </MapContainer>
    )
};