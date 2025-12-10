import axios from "../api/axios";

const URL_MOVIE_DETAIL = "/movie/";

// ! Movie Details

export const getMovieDetails = async (movieId, language = "en-US") => {
  try {
    const response = await axios.get(`${URL_MOVIE_DETAIL}${movieId}`, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API MOVIE DETAILS: ", err);
  }
};
