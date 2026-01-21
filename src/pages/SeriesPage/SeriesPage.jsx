import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import { getTopSeries } from "../../services/Series";

export default function SeriesPage() {
  const [series, setSeries] = useState([]);

  const [loading, setLoading] = useState(true);

  async function getSeries() {
    setLoading(true);
    try {
      const resTopSeries = await getTopSeries();

      setSeries(resTopSeries.results);

      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getSeries();
  }, []);

  // LOGS
  console.log("SERIES: ", series);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* <NavBar /> */}
      SeriesPage
    </div>
  );
}
