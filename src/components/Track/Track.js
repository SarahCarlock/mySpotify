import React, { useState } from "react";

import "./styles-track.css";

const Track = ({name, artist, album }) => {
    const [list, setList] = useState([]);


    const deleteTrack = (trackId) => {
        const updateList = list.filter((track => track.id !== trackId));
        setList(updateList);
    }

    const addTrack  = (trackId) => {
            setList((prevList) => [...prevList, trackId]);
    };

    return (
        <div className="track">
            <h4>Track.js</h4>
            <h4>{name}</h4>
                <p>Artist: {artist}</p>
                <p>Album: {album}</p>
                <button className="selectionButtons" onClick={addTrack}>Add Track</button>
                <button className="selectionButtons" onClick={deleteTrack}>Delete Track</button>
        </div>
    );
};

export default Track;