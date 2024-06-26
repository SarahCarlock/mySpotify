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
            <h4>Tracklist.js</h4>
            {tracks.map(track => (
                <Track track={track} key={track.id} name={track.name} artist={track.artist} album={track.album} />
            ))}
        </div>
    );
};

export default Tracklist;