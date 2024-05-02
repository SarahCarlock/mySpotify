import React from "react";

import Tracklist from "../Tracklist/Tracklist";
import './styles-searchresults.css'

function SearchResults() {
    return (
        <div className="searchresults">
            <h2>SearchResults.js</h2>
            <Tracklist Tracklist={Tracklist} />
        </div>
    );
};
export default SearchResults;