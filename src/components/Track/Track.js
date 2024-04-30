import React from "react";

import "./styles.css";

const Track = ({name, artist, album }) => {
    return (
        <div className="track">
            <h4>{name}</h4>
                <p>Artist: {artist}</p>
                <p>Album: {album}</p>
        </div>
    );
};

export default Track;