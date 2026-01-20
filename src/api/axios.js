import axios from "axios";
import { TOKEN } from "./TOKEN";

const BASE_URL_TMDB = "https://api.themoviedb.org/3/";
const BASE_URL_JIKAN = "https://api.jikan.moe/v4/";

export default axios.create({
  baseURL: BASE_URL_TMDB,
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization: TOKEN,
  },
});

//
const TMDB = axios.create({
  baseURL: BASE_URL_TMDB,
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization: TOKEN,
  },
});

const JIKAN = axios.create({
  baseURL: BASE_URL_JIKAN,
  timeout: 5000,
  headers: {
    accept: "application/json",
  },
});

export { TMDB, JIKAN };
