import axios from "axios";
import { TOKEN } from "./TOKEN";

const BASE_URL = "https://api.themoviedb.org/3/";

export default axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization: TOKEN,
  },
});
