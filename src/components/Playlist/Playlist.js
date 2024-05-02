import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./styles-playlist.css";

const Playlist = () => {
    return (
        <div className="playlist">
          <h2>My Playlist</h2>
          <Tracklist/>
        </div>
      );
};

export default Playlist;