import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

import LoadingGif from '../../popcorn_loading_gif.gif';

const base_image_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie, loading }) {
    return (
        <div className="videoCard">
            {!loading ? <div>
                <img src={base_image_url + movie.backdrop_path || movie.poster_path} alt="Movie poster" />
                <TextTruncate 
                    line={1}
                    element="p"
                    truncateText="..."
                    text={movie.overview}
                />
                <h2>{movie.title || movie.original_name}</h2>
                <p className="videoCard__stats">
                    {movie.media_type && `${movie.media_type} *`}
                    {movie.release_date || movie.first_air.date} *
                    <ThumbUpSharp />
                    {movie.vote_count}
                </p>
            </div> : <img className="loading" src={LoadingGif} alt="loading gif" />}
        </div>
    )
}

export default VideoCard;
