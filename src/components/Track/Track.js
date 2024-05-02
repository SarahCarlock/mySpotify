import React from "react";

import "./styles-track.css";

const Track = ({name, artist, album }) => {
    return (
        <div className="track">
            Track
            <h4>{name}</h4>
                <p>Artist: {artist}</p>
                <p>Album: {album}</p>
        </div>
    );
};

export default Track;