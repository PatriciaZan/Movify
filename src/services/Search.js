import { TMDB, JIKAN } from "../api/axios";

export const getSearchMoviesAPI = async (value) => {
  try {
    const response = await TMDB.get(`/search/movie?query=${value}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API SEARCh: ", err);
  }
};

export const getSearchSeriesAPI = async (value) => {
  try {
    const response = await TMDB.get(`/search/tv?query=${value}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API SEARCH SERIES: ", err);
  }
};

export const getSearchAnimeAPI = async (value) => {
  try {
    const response = await JIKAN.get(`/anime?q=${value}`);
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API SEARCH: ", err);
  }
};
