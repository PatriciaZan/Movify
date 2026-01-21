import { TMDB } from "../api/axios";

const URL_SEARCH = "/search/multi";

export const getSearch = async (value) => {
  try {
    const response = await TMDB.get(`/search/multi?query=${value}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API SEARCh: ", err);
  }
};
