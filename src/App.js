import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesUl';
import AddMovie from './components/AddMovie';
import './App.css';

import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Add movies to database
  async function addMovieHandler(movie) {
    console.log(movie);
    const response = await fetch('https://react-post-555-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
      // method: 'GET'
      method: 'POST',
      // body: movie
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json();
    console.log(data)
  }

  // Fetch movies from database
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch('https://swapi.dev/api/films/');
      const response = await fetch('https://react-post-555-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data)

      const fetchedMovies = [];

      for (const key in data) {
        fetchedMovies.push(data[key])

        // The way Max write
        // fetchedMovies.push({
        //   id: key,
        //   title: data[key].title,
        //   openingText: data[key].openingText,
        //   releaseDate: data[key].releaseDate
        // })
      }

      console.log(fetchedMovies)

      // const transformedMovies = fetchedMovies.map((movieData) => {
      //   return {
      //     // id: movieData.episode_id,
      //     id: movieData.id,
      //     title: movieData.title,
      //     openingText: movieData.openingText,
      //     releaseDate: movieData.releaseDate,
      //   };
      // });
      setMovies(fetchedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      {/* <section >{<UseMemo />}</section> */}
      {/* <section>{<UseCallback/>} </section> */}
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
