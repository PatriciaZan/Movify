//https://api.jikan.moe/v4/top/anime

import { JIKAN } from "axios";

const URL_TOP_ANIME = "/top/anime";

export const getTopAnimes = async (language = "en-US") => {
  try {
    const response = await JIKAN.get(URL_TOP_ANIME, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API TOP MOVIES: ", err);
  }
};
