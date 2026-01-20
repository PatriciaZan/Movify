import axios from "../api/axios";

const URL_TRENDING_MOVIES = "/trending/movie/day";

export const getTopMovies = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_TRENDING_MOVIES, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API TOP MOVIES: ", err);
  }
};
