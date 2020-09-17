import React, { useState } from 'react';
import './Results.css';

import VideoCard from '../VideoCard/VideoCard';


function Results() {
    const [movies, setMovies] = useState([]);

    return (
        <div className="results">
            {movies.map(movie => {
                return <VideoCard />
            })}
        </div>
    )
}

export default Results;
