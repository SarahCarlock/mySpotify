import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./styles-playlist.css";

const Playlist = () => {
    return (
        <div className="playlist">
          <h3>My Playlist.js</h3>
          <Tracklist/>
          <button>Save to Spotify</button>
        </div>
      );
};

export default Playlist;