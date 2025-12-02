import React, { useEffect, useState } from "react";
import { getTopMovies } from "../services/Top";
import { TOKEN } from "../api/TOKEN";

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTop() {
    try {
      const response = await getTopMovies();
      setTopMovies(response);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getTop();
  }, []);

  console.log(topMovies);

  return (
    <div>
      home
      <div></div>
    </div>
  );
}
