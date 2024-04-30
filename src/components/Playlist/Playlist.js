import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./styles.css";

const Playlist = () => {
    const tracks = [
        { id: 1, name: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)" },
        { id: 2, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
        { id: 3, name: "Dance Monkey", artist: "Tones and I", album: "The Kids Are Coming" },
        { id: 4, name: "Someone Like You", artist: "Adele", album: "21" },
        { id: 5, name: "Believer", artist: "Imagine Dragons", album: "Evolve" }
    ];

    return (
        <div>
          <h2>My Playlist</h2>
          <Tracklist tracks={tracks} />
        </div>
      );
};

export default Playlist;