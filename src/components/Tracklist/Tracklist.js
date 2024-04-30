import React from "react";

import "./styles.css";
import Track from "../Track/Track";


const Tracklist = ({ tracks }) => {
    <div className="tracklist">
        {tracks.map(track => (
            <Track key={track.id} name={track.name} artist={track.artist} album={track.album} />
        ))}
    </div>
};

export default Tracklist;



/*
    const [list, setList] = useState([]);


    const deleteTrack = (trackId) => {
        const updateList = list.filter((track => track.id !== trackId));
        setList(updateList);
    }

    const addTrack = (trackId) => {
            setList((prevList) => [...prevList, trackId]);
    };

    return (
        <div>
            <h3>Search Results</h3>
                {list.map((track) => (
                    <div key={track.id}>
                        < Track name={track.name} artist={track.artist} album={track.album} />
                        <button onClick={() => addTrack(track.id)}>Add Track</button>
                        <button onClick={() => deleteTrack(track.id)}>Delete Track</button>
                    </div>
                ))}
        </div>
    );
    */