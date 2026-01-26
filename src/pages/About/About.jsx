import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  getDetailsAnimeAPI,
  getDetailsMovieAPI,
  getDetailsSerieAPI,
} from "../../services/Details";

export default function About() {
  const { itemId } = useParams();
  const location = useLocation();
  const { state } = location;

  const [details, setDetails] = useState([]);

  console.log("ABOUT DATA: ", state);
  console.log("ABOUT ITEMID : ", itemId);

  async function getDetails() {
    // setLoading(true);
    try {
      {
        if (state.typeToPass === "movie") {
          const resDetailsMovie = await getDetailsMovieAPI(itemId);
          setDetails(resDetailsMovie);
        } else if (state.typeToPass === "serie") {
          const resDetailSerie = await getDetailsSerieAPI(itemId);
          setDetails(resDetailSerie);
        } else {
          const resDetailAnime = await getDetailsAnimeAPI(itemId);
          setDetails(resDetailAnime);
        }
      }

      //setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  console.log("DETAILS: ", details);

  if (!itemId) {
    return <p>Error reciving the data </p>;
  }

  //const { item } = state;
  return (
    <div>
      About
      {/* <p>{item.title}</p> */}
    </div>
  );
}
