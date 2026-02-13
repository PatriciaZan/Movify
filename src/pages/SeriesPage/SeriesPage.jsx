import React, { useEffect, useState } from "react";

import "../pages.css";

import { getTopRatedSeriesAPI, getTopSeriesAPI } from "../../services/Series";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { useFavorites } from "../../context/FavoritesContext";
import Favorites from "../../components/Favorites/Favorites";
import Sidebar from "../../components/SideBar/Sidebar";
import { useType } from "../../context/TypeContext";

export default function SeriesPage() {
  const [series, setSeries] = useState([]);
  const [ratedSeries, setRatedSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const { favorites } = useFavorites();
  const { setType } = useType();

  async function getSeries() {
    setLoading(true);
    setType("/series");
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
  //console.log("SERIES: ", series);
  //console.log("TOP RATED SERIES: ", ratedSeries);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-container">
      <div className="page_banner-container">
        {series && series.length > 0 ? (
          <Banner contentBanner={series.slice(0, 3)} type={"serie"} />
        ) : (
          <p>Loading</p>
        )}
      </div>

      <div className="page_sidebar-container">
        <Sidebar />
      </div>

      <div className="page_content-container">
        Top Series
        {series && series.length > 0 ? (
          <Card content={series} type={"serie"} />
        ) : (
          <p>Loading</p>
        )}
        <div>
          Top Rated
          {ratedSeries && ratedSeries.length > 0 ? (
            <Card content={ratedSeries} />
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
}
