// import React from 'react'
// const API_KEY = '316ba565298a02630d25eff6bcc733bf';
import React, { useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
// import Movietmdb from './Movietmdb';

function Movietmdb () {

const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
// const perPage = 10;
const apiKey = '316ba565298a02630d25eff6bcc733bf'; // Replace with your TMDb API key

useEffect(() => {
  fetchMovies(page);
}, [page]);

const fetchMovies = (currentPage) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      setMovies(prevMovies => [...prevMovies, ...data.results]);
      console.log(data)
    })
    .catch((error) =>
      console.error('Error fetching movies:', error)
    );
};

const handleLoadMore = () => {
  setPage(prevPage => prevPage + 1);
};

const redirectToMoviePage = (movieId) => {
  window.location.href = `https://www.themoviedb.org/movie/${movieId}`;
};

return (

  <div className='movietmdb'>
    <Sidebar />
    <div id="movies-container" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'scroll', gridtemplatecolums: '100px 50px 100px', gridTemplateRows: 'auto auto 80px', columnGap: '50px', rowGap: '20px 30px', marginLeft: '30px' }}>

      {movies.map(movie => (

        <div key={movie.id} className="movie" style={{ border: '2px solid black', width: '300px', margin: '2px', textAlign: 'center', display: 'flex' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            onClick={() => redirectToMoviePage(movie.id)}
            style={{ cursor: 'pointer', height: '150px', justifyContent: 'space-between', width: '300px' }}
          />
          <h6 onClick={() => redirectToMoviePage(movie.id)} style={{ cursor: 'pointer' }}>
            {movie.title}
          </h6>
          <h6 style={{ fontSize: 'x-small' }}>{movie.overview}</h6>
        </div>

      ))}
    </div>
    <button onClick={handleLoadMore} className="load-more-btn">Load More</button>
  </div>
);
}

export default Movietmdb






 