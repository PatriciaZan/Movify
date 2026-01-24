import React, { useEffect, useState } from "react";
import { getMoviesGenres } from "../../services/Movies";
import Card from "../Card/Card";

export default function Genres() {
  const [movieGenre, setMovieGenre] = useState([]);
  const [genreID, setGenreID] = useState("14");
  //let genreID = "14"; //16 animation //14 action

  async function getGenres() {
    try {
      const resMovieGenre = await getMoviesGenres(genreID);
      setMovieGenre(resMovieGenre.results);
    } catch (err) {
      console.log("ERROR ON GENRES: ", err);
    }
  }

  const handleGenres = (e, genreValue) => {
    e.preventDefault();
    setGenreID(genreValue);
  };

  useEffect(() => {
    getGenres();
  }, [genreID]);

  return (
    <>
      By genre
      <button onClick={(e) => handleGenres(e, "16")}>Action</button>
      <button onClick={(e) => handleGenres(e, "14")}>Animation</button>
      <button onClick={(e) => handleGenres(e, "18")}>Drama</button>
      <button onClick={(e) => handleGenres(e, "27")}>Horror</button>
      <button onClick={(e) => handleGenres(e, "37")}>Western</button>
      <div>
        {movieGenre && movieGenre.length > 0 ? (
          <Card content={movieGenre} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}
