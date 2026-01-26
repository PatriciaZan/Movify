import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import { getTopRatedSeriesAPI, getTopSeriesAPI } from "../../services/Series";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";

export default function SeriesPage() {
  const [series, setSeries] = useState([]);
  const [ratedSeries, setRatedSeries] = useState([]);

  const [loading, setLoading] = useState(true);

  async function getSeries() {
    setLoading(true);
    try {
      const resTopSeries = await getTopSeriesAPI();
      const resTopRated = await getTopRatedSeriesAPI();
      setSeries(resTopSeries.results);
      setRatedSeries(resTopRated.results);
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
  console.log("TOP RATED SERIES: ", ratedSeries);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* <NavBar /> */}
      <hr />
      <Search type={"series"} />
      SeriesPage
      <hr />
      {series && series.length > 0 ? (
        <Banner contentBanner={series.slice(0, 3)} type={"serie"} />
      ) : (
        <p>Loading</p>
      )}
      <div>
        Top Series
        {series && series.length > 0 ? (
          <Card content={series} type={"serie"} />
        ) : (
          <p>Loading</p>
        )}
      </div>
      <hr />
      <div>
        Top Rated
        {ratedSeries && ratedSeries.length > 0 ? (
          <Card content={ratedSeries} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}
