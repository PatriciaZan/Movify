import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  getDetailsAnimeAPI,
  getDetailsAnimeCharacterAPI,
  getDetailsMovieAPI,
  getDetailsSerieAPI,
} from "../../services/Details";
import { useType } from "../../context/TypeContext";

export default function AboutPage() {
  const { itemId } = useParams();
  const location = useLocation();
  const { state } = location;

  const [details, setDetails] = useState([]);

  console.log("ABOUT DATA: ", state);

  // !
  const { type } = useType();
  console.log("TYPE: ", type);

  const getImagSrc = (item) => {
    // JIKAN
    if (item?.data?.images?.jpg?.image_url) {
      //console.log("JINKAN");
      return item.data.images.jpg.image_url;
    }

    // TMDB
    if (item?.poster_path) {
      //console.log("TMDB");
      return `https://image.tmdb.org/t/p/original${item.poster_path}`;
    }

    // Fallback?
  };

  async function getDetails() {
    // setLoading(true);
    try {
      if (state.item.original_title) {
        const resDetailsMovie = await getDetailsMovieAPI(itemId);
        setDetails(resDetailsMovie);
      } else if (state.item?.nicknames) {
        const resDetailsCharacterAnime =
          await getDetailsAnimeCharacterAPI(itemId);
        //setDetails(state.item);
        setDetails(resDetailsCharacterAnime);
      } else if (state.item.name) {
        const resDetailSerie = await getDetailsSerieAPI(itemId);
        setDetails(resDetailSerie);
      } else {
        const resDetailAnime = await getDetailsAnimeAPI(itemId);
        setDetails(resDetailAnime);
      }

      //setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getDetails();
  }, [itemId]);

  console.log("DETAILS: ", details);

  if (!itemId) {
    return <p>Error reciving the data </p>;
  }

  //const { item } = state;
  return (
    <div>
      About
      <NavLink to={`${type}`}>X</NavLink>
      <img style={{ width: "100px" }} src={getImagSrc(details)} alt="" />
      <p></p>
      {/* <p>{item.title}</p> */}
    </div>
  );
}
