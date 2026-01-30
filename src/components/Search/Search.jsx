import React, { useEffect, useState } from "react";
import {
  getSearchMoviesAPI,
  getSearchAnimeAPI,
  getSearchSeriesAPI,
} from "../../services/Search";
import SearchResult from "../SearchResults/SearchResult";

export default function Search({ type }) {
  const [input, setInput] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);

  async function fetchDataSearch(value) {
    setLoadingSearch(true);
    if (type === "anime") {
      try {
        const resSearch = await getSearchAnimeAPI(value);
        setSearchResponse(resSearch.results);
      } catch (err) {
        console.log("error", err);
      }
    }

    if (type === "series") {
      try {
        const resSearch = await getSearchSeriesAPI(value);
        setSearchResponse(resSearch.results);
      } catch (err) {
        console.log("error", err);
      }
    }

    try {
      const resSearch = await getSearchMoviesAPI(value);
      setSearchResponse(resSearch.results);
      setLoadingSearch(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  //console.log("SEARCH: ", searchResponse);

  const handleChange = (e) => {
    e.preventDefault();
    fetchDataSearch(input);
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
        {searchResponse && searchResponse.length > 0 ? (
          <SearchResult element={searchResponse} />
        ) : (
          <p>Não</p>
        )}
      </div>
    </div>
  );
}
