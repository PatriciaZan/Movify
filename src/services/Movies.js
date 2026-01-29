import axios from "../api/axios";

const URL_TRENDING_MOVIES = "/trending/movie/day";
const URL_UPCOMING_MOVIES = "/movie/top_rated";

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

export const getTopRatedMovies = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_UPCOMING_MOVIES, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API UPCOMING MOVIES: ", err);
  }
};

export const getMoviesGenres = async (genreID) => {
  //console.log(genreID);

  try {
    const response = await axios.get(`/discover/movie?with_genres=${genreID}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API MOVIE GENRE: ", err);
  }
};
