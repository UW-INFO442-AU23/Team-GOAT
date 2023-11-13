import './tag.css';
import React from "react";

function Tag(props) {
    var features = props.feature;
    let featurePills = [];
    for(var i = 0; i<features.length; i++){
        if (i === 0) {
            featurePills.push(
            <h2 className="titletext">{features[i]}</h2>
            )
            i++
        }
        featurePills.push(
            <p className="tagtext">{features[i]}</p>
        )   
    }
    return (
        <div className="card">
                {featurePills}
        </div>
    )
}

export default Tag;
