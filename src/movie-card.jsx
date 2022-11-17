import React from "react";


// Note: components name must start with capital letter, go to app.js
// and import this moviecard component, then inside where you want it to display
// call this name of the component  MovieCard with a self closing tag, also add the name of the props you added here

const MovieCard = ({movie}) => {
    return (
        <div className='movie'>
            <div>
                <p> {movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
}


export default MovieCard;