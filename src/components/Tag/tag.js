import './tag.css';
import React from "react";

function Tag(props) {
    var features = props.feature;
    let featurePills = [];
    for(var i = 0; i<features.length; i++){
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
