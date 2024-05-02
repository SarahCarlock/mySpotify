import React from "react";

import "./styles-track.css";

const Track = ({name, artist, album }) => {
    return (
        <div className="track">
            <h4>Track.js</h4>
            <h4>{name}</h4>
                <p>Artist: {artist}</p>
                <p>Album: {album}</p>
        </div>
    );
};

export default Track;