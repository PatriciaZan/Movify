import React, { useEffect, useState } from "react";

import { getTopTV } from "../../services/TopTV";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import UserInfo from "../../components/User/UserInfo";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

export default function SeriesPage() {
  const [topTV, setTopTV] = useState([]);
  const [loading, setLoading] = useState(true);

  // * API CALLS -----------------------------------------------
  async function getTopSeries() {
    try {
      const resTopTV = await getTopTV();
      setTopTV(resTopTV.results);
      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getTopSeries();
  }, []);

  console.log("TOP TV: ", topTV);

  // LOADING
  if (loading) {
    return (
      <div className="Dashboard-loading">
        <img
          className="Dashboard-loading_image"
          src={"../src/assets/Movify-logo.png"}
          alt=""
        />

        <p>Loading . . .</p>
      </div>
    );
  }

  if (loading === false) {
    return (
      <div className="body">
        <div className="Body-image-container">
          <img
            className="Dashboard-image"
            src={`https://image.tmdb.org/t/p/original${topTV[1].backdrop_path}`}
          />
        </div>
        <div className="Dashboard">
          <div className="Dashboard-navBar">
            <NavBar className="Dashboard-navBar" />
          </div>
          <div className="Dashboard-banner-left">
            <Banner
              // onHandleShow={handleShow}
              id={topTV[0].id}
              header={"Most Popular Tv Show"}
              posterBig={topTV[0].backdrop_path}
              title={topTV[0].original_name}
              overview={topTV[0].overview}
            />
          </div>

          <div className="Dashboard-banner-right">
            {/* <Banner
              onHandleShow={handleShow}
              id={theatherMovies[0].id}
              header={"In Theathers Today"}
              posterBig={theatherMovies[0].backdrop_path}
              title={theatherMovies[0].original_title}
              overview={theatherMovies[0].overview}
            /> */}
          </div>

          <div className="Dashboard-infos">
            <UserInfo
              // onHandleShow={handleShow}
              favorites={"0"}
              watchList={"0"}
            />
          </div>

          <div className="Dashboard-btns">
            <Button content={"Trending Now"} />
            <Button content={"upComing"} />
            <Button content={"In Theaters"} />
          </div>

          <div className="Dashboard-cards">
            {topTV.slice(0, 7).map((item) => (
              // <Card info={topMovies} />
              <Card
                // onHandleShow={handleShow}
                id={item.id}
                poster={item.poster_path}
                title={item.title}
                votes={item.vote_average}
                release={item.first_air_date}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
