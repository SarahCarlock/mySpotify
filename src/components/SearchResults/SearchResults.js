import React from "react";

import Tracklist from "../Tracklist/Tracklist";
import './styles-searchresults.css'

function SearchResults() {
    return (
        <div className="searchresults">
            <Tracklist Tracklist={Tracklist} />
        </div>
    );
};
export default SearchResults;