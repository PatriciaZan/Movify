import axios from "axios";
import React, { useEffect, useState } from "react";

import CardCast from "./CardCast";

export default function About({ modalContent, onClose, status }) {
  //const type = status;
  let type;
  //console.log("TYPE: ", type);

  const [cast, setCast] = useState([]);
  //console.log("CAST: ", cast);
  //console.log("MODALCONTENT: ", modalContent);

  let title;

  if (modalContent.original_title !== undefined) {
    type = "movies";
    //console.log("XXmovies");
  }
  if (modalContent.name !== undefined) {
    type = "series";
    //console.log("XXseries");
  }

  if (status === "series") {
    title = modalContent.name;
    //console.log("AQUI ", modalContent.name);
  } else if (status === "movies" || status === "favorites") {
    title = modalContent.title;
    //console.log("AQUI ", modalContent.title);
  }

  const id = modalContent.id;

  let options = {};

  if (type === "movies") {
    options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzRjNzI3MmVlNjRmYjExZDI3MGUxNDI3ZDQwYzYzNyIsIm5iZiI6MTc1NTY0MDg0OS41NDIsInN1YiI6IjY4YTRmNDExYmMyZWE1YjA2ZmQ1NDk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84Jtk5jvHL9iWtcrGlk0KMKpX7Vm-snWJe6BTCNLX3E",
      },
    };
  } else {
    options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}/credits`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzRjNzI3MmVlNjRmYjExZDI3MGUxNDI3ZDQwYzYzNyIsIm5iZiI6MTc1NTY0MDg0OS41NDIsInN1YiI6IjY4YTRmNDExYmMyZWE1YjA2ZmQ1NDk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84Jtk5jvHL9iWtcrGlk0KMKpX7Vm-snWJe6BTCNLX3E",
      },
    };
  }

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await axios.request(options);
        const data = response.data;
        //console.log(data.cast);

        setCast(data.cast);
      } catch (err) {
        console.log("ERRO: ", err);
      }
    }

    fetchCast();
  }, []);

  return (
    <div className="about-modal-container">
      <img
        className="about-modal-img-backdrop"
        src={`https://image.tmdb.org/t/p/original${modalContent.backdrop_path}`}
        alt=""
      />
      <button className="about-modal-btnClose" onClick={onClose}>
        ❌
      </button>

      <h2 className="about-modal-movieTitle">{title}</h2>
      <div className="about-modal-content">
        <p>{modalContent.overview}</p>
        <p>Release in: {modalContent.release_date}</p>
        <p>⭐{modalContent.vote_average}</p>
      </div>

      <div className="about-modal-card-cast">
        <h3>Movie Stars</h3>
        {cast && cast.length > 0 ? (
          <CardCast content={cast} />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
