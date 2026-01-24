import axios from "../api/axios";

const URL_SERIES = "/discover/tv";
const URL_TOP_RATED_SERIES = "/tv/top_rated";

export const getTopSeriesAPI = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_SERIES, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API TOP SERIES: ", err);
  }
};

export const getTopRatedSeriesAPI = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_TOP_RATED_SERIES, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API TOP RATED SERIES: ", err);
  }
};
