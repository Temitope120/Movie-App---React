import logo from './logo.svg';
import { useEffect, useState } from 'react';
// import css
import './App.css';
// import search.svg
import SearchIcon from './search.svg'
import MovieCard from './movie-card';

// API Key  41e34988
const API_URL = 'http://www.omdbapi.com?apikey=41e34988';

const movieOne = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);

  // calling the endpoint to search
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data.Search)
  }


  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for Movies' value="Superman" onChange={() => { }} />

        <img src={SearchIcon} alt="Search" onClick={() => { }} />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie = {movie}/>
            ))}
         </div>
        ) : (
          <div className='empty'> 
            <h2> No movie found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
