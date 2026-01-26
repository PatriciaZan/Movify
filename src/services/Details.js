import { JIKAN, TMDB } from "../api/axios";

const URL_MOVIE_DETAIL = "/movie/";
const URL_SERIE_DETAIL = "/tv/";
const URL_ANIME_DETAIL = "/anime/";

// ! Movie Details

export const getDetailsMovieAPI = async (id) => {
  try {
    const response = await TMDB.get(`${URL_MOVIE_DETAIL}${id}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API MOVIE DETAILS: ", err);
  }
};

export const getDetailsSerieAPI = async (id) => {
  try {
    const response = await TMDB.get(`${URL_SERIE_DETAIL}${id}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API SERIE DETAILS: ", err);
  }
};

export const getDetailsAnimeAPI = async (id) => {
  try {
    const response = await JIKAN.get(`${URL_ANIME_DETAIL}${id}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API ANIME DETAILS: ", err);
  }
};
