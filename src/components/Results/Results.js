import React, { Suspense, useEffect, useState } from 'react';
import './Results.css';
import axios from '../../axios';
import FlipMove from 'react-flip-move';
import VideoCard from '../VideoCard/VideoCard';

// const VideoCard = React.lazy(() => import ('../VideoCard/VideoCard'));


function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            const request = await axios.get(selectedOption);
            setMovies(request.data.results);

            setLoading(false);
            
            return request; 
        }

        fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            {movies.map(movie => {
                return (
                    // <Suspense key={movie.id} fallback={<div></div>}>
                    //     <VideoCard key={movie.id} movie={movie} loading={loading} />
                    // </Suspense>
                    <FlipMove>
                        <VideoCard key={movie.id} movie={movie} loading={loading} />
                    </FlipMove>
                );
            })}
        </div>
    )
}

export default Results;
