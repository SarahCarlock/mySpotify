import React, { useCallback } from "react";

import "./styles.css";

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemoval(props.track);
        },
        [props.onRemoval, props.track]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="trackAction" onClick={removeTrack}>
                    -
                </button>            
            );
        }
            return (
                <button className="trackAction" onClick={addTrack}>
                    +
                </button>
            );
    };

    return (
        <div className="Track">
            <div className="trackInfo">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;