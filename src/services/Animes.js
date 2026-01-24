//https://api.jikan.moe/v4/top/anime

import { JIKAN } from "../api/axios";

const URL_TOP_ANIME = "/top/anime";
const URL_POPULAR_CHARACTERS = "/top/characters";

export const getTopAnimesAPI = async (language = "en-US") => {
  try {
    const response = await JIKAN.get(URL_TOP_ANIME, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API TOP MOVIES: ", err);
  }
};

export const getCharactersAnimeAPI = async (language = "en-US") => {
  try {
    const response = await JIKAN.get(URL_POPULAR_CHARACTERS, {
      params: { language },
    });
    return response.data;
  } catch (err) {
    console.log("ERRO FETCHING API POPULAR CHARACTERS: ", err);
  }
};
