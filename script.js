const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY';

fetch(API_URL)
  .then(response => response.json())
  .then(data => populateMovies(data.results))
  .catch(error => console.error('Error fetching data:', error));

function populateMovies(movies) {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.vote_average}</p>
    `;

    movieList.appendChild(movieCard);
  });
}
