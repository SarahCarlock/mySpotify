import React, { useState } from "react";

import "./styles.css";
import Track from "../Track/Track";


const Tracklist = (props) => {
    const [list, setList] = useState([]);

    const deleteTrack = (props) => {
        const updateList = list.map((props) => props !== props);
        setList(updateList);
    }

    const addTrack = (props) => {
        setList((prevList) => [...prevList, props]);
    };

    return (
        <div>
            <h3>Search Results</h3>

        </div>
    );
};

export default Tracklist;