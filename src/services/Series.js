import axios from "../api/axios";

const URL_TRENDING_TV = "/trending/tv/day?language=en-US";

const URL_SERIES = "/discover/tv";

export const getTopTV = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_TRENDING_TV, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API TOP TV: ", err);
  }
};

export const getTopSeries = async (language = "en-US") => {
  try {
    const response = await axios.get(URL_SERIES, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API TOP SERIES: ", err);
  }
};
