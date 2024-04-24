import React, { useState, useCallback } from "react";

import "./styles.css";
import Track from "../Track/Track";


function Tracklist(props) {
    return (
        <div>
            {props.}
            <h3>Search Results</h3>
                <p>{SearchResults}</p>
        </div>
    )
};

export default Tracklist;