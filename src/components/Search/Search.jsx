import React, { useEffect, useState } from "react";
import { getSearch } from "../../services/Search";
import SearchResult from "../SearchResults/SearchResult";

export default function Search() {
  const [input, setInput] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);

  async function fetchDataSearch(value) {
    try {
      const resSearch = await getSearch(value);
      setSearchResponse(resSearch.results);
      setLoadingSearch(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  console.log("SEARCH: ", searchResponse);

  const handleChange = (e) => {
    e.preventDefault();
    fetchDataSearch(input);
  };

  //useEffect(() => {}, [searchResponse]);

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
