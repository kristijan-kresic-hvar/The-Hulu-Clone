import React, { Suspense, useEffect, useState } from 'react';
import './Results.css';
import axios from '../../axios';
import requests from '../../requests';

import VideoCard from '../VideoCard/VideoCard';

// const VideoCard = React.lazy(() => import ('../VideoCard/VideoCard'));


function Results() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            const request = await axios.get(requests.fetchActionMovies);
            setMovies(request.data.results);

            setLoading(false);
            
            return request; 
        }

        fetchData();
    }, []);

    return (
        <div className="results">
            {movies.map(movie => {
                return (
                    // <Suspense key={movie.id} fallback={<div></div>}>
                    //     <VideoCard key={movie.id} movie={movie} loading={loading} />
                    // </Suspense>
                    <VideoCard key={movie.id} movie={movie} loading={loading} />
                );
            })}
        </div>
    )
}

export default Results;
