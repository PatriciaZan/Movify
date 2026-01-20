import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import { getTopMovies } from "../../services/Movies";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  //const [popularMovies, setPopularMovies] = useState([]);
  //const [theatherMovies, setTheatherMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  async function getTop() {
    setLoading(true);
    try {
      const resTopMovies = await getTopMovies();
      //const resPopularMovies = await getPopularMovies();
      //const resTheatherMovies = await getTheatherMovies();
      setMovies(resTopMovies.results);
      //setPopularMovies(resPopularMovies.results);
      //setTheatherMovies(resTheatherMovies.results);
      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getTop();
  }, []);

  // LOGS
  console.log("MOVIES: ", movies);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavBar />
      MoviesPage
    </div>
  );
}
