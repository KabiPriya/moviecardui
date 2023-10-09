import React from 'react';

function Home({ movies }) {
  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="movie-cards">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
