import React, { useEffect, useState } from "react";
import {
  getSearchMoviesAPI,
  getSearchAnimeAPI,
  getSearchSeriesAPI,
} from "../../services/Search";
import SearchResult from "../SearchResults/SearchResult";
import { useType } from "../../context/TypeContext";

export default function Search() {
  const [input, setInput] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);

  const { type } = useType();
  console.log("SEARCH TYPE: ", type);

  async function fetchDataSearch(value) {
    setLoadingSearch(true);
    if (type === "/animes") {
      try {
        const resSearch = await getSearchAnimeAPI(value);
        setSearchResponse(resSearch);
      } catch (err) {
        console.log("error", err);
      }
    }

    if (type === "/series") {
      try {
        const resSearch = await getSearchSeriesAPI(value);
        setSearchResponse(resSearch.results);
      } catch (err) {
        console.log("error", err);
      }
    }

    if (type === "/") {
      try {
        const resSearch = await getSearchMoviesAPI(value);
        setSearchResponse(resSearch.results);
        setLoadingSearch(false);
      } catch (err) {
        console.log("ERROR", err);
      }
    }
  }

  //console.log("SEARCH: ", searchResponse);

  const handleChange = (e) => {
    e.preventDefault();
    fetchDataSearch(input);
    setInput("");
  };

  const handleClose = (e) => {
    e.preventDefault();
    setSearchResponse([]);
    setInput("");
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleChange(e)}>
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div>
        <span onClick={(e) => handleClose(e)}>X</span>
        {searchResponse && searchResponse.length > 0 ? (
          <SearchResult element={searchResponse} type={type} />
        ) : (
          <p>Não</p>
        )}
      </div>
    </div>
  );
}
