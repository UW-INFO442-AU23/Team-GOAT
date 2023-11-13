import './tag.css'
import React from "react";

function Tag(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">{props.Name}</h1>
                <p class="h5">{props.Address}</p>
                <p class="h5">{props.Hours}</p>
            </div>
        </div>
      )
}

export default Tag;
