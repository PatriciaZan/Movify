import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import { getTopAnimes } from "../../services/Animes";

export default function AnimesPage() {
  const [animes, setAnimes] = useState([]);

  const [loading, setLoading] = useState(true);

  async function getAnimes() {
    setLoading(true);
    try {
      const resTopAnimes = await getTopAnimes();
      setAnimes(resTopAnimes.data);
      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getAnimes();
  }, []);

  // LOGS
  console.log("Animes: ", animes);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* <NavBar /> */}
      AnimesPage
    </div>
  );
}
