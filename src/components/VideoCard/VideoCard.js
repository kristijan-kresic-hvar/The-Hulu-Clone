import React from 'react';
import './VideoCard.css';

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src="https://cdn2-www.comingsoon.net/assets/uploads/2019/12/posters.jpg" alt="Movie poster" />
            <p>This is a movie about joker</p>
            <h2>Movie Title</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard;
