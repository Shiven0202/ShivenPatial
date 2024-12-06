import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Movie({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
        setLoading(false);  // Stop loading even if there is an error
      }
    }

    fetchData();
  }, [fetchUrl]);

  // Render a loading state or error message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => {
          const imageUrl = isLargeRow
            ? movie.poster_path
            : movie.backdrop_path;

          // Check if image URL is valid
          const imageSrc = imageUrl ? `${baseUrl}${imageUrl}` : '';

          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={imageSrc}
              alt={movie.name || movie.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
