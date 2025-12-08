import axios from "../api/axios";

const URL_POPULAR_MOVIES = "/movie/popular";
const URL_THEATHER_MOVIES = "/movie/now_playing";

// ! Movies that are rated.

export const getPopularMovies = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_POPULAR_MOVIES, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API POPULAR MOVIES: ", err);
  }
};

// ! Movies in theather

export const getTheatherMovies = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_THEATHER_MOVIES, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API THEATHER MOVIES: ", err);
  }
};
