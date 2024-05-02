import React from "react";

import "./styles-tracklist.css";
import Track from "../Track/Track";

const tracks = [
{ id: 1, name: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)" },
{ id: 2, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
{ id: 3, name: "Dance Monkey", artist: "Tones and I", album: "The Kids Are Coming" },
{ id: 4, name: "Someone Like You", artist: "Adele", album: "21" },
{ id: 5, name: "Believer", artist: "Imagine Dragons", album: "Evolve" }
];
const Tracklist = () => {
    return (
        <div className="tracklist">
            Does this show?
            {tracks.map(track => (
                <Track key={track.id} name={track.name} artist={track.artist} album={track.album} />
            ))}
        </div>
    );
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