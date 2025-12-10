import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./about.sass";

import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

// APIs
import { getMovieDetails } from "../../services/Details";
import Card from "../../components/Card/Card";
import { FaStar } from "react-icons/fa6";

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();
  const itemID = location.state.id;

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getDetails() {
    try {
      const resDetails = await getMovieDetails(itemID);
      setDetails(resDetails);
      setLoading(false);
    } catch (err) {
      console.log("ERROR ", err);
    }
  }

  useEffect(() => {
    getDetails(itemID);
  }, []);

  console.log(details);

  //console.log(details.genres[0].name);

  const goDashboard = () => {
    navigate("/");
  };
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

  return (
    <div className="About-container">
      <div className="image_container">
        <img
          className="About-image_cover"
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        />
        <button onClick={goDashboard}> Return </button>

        <h2>"{details.tagline}"</h2>
      </div>

      <div className="_information">
        <div className="_header">
          <h1>{details.title}</h1>
          <ul>
            {details.genres.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>

          <div className="_header-details">
            <p>
              <FaStar /> {details.vote_average}
            </p>
            <p>
              {details.release_date.length > 4
                ? details.release_date.slice(0, 4)
                : "no date"}
            </p>
          </div>
        </div>

        <br />
        <hr />

        <div className="_header-details-down">
          <img
            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
            alt=""
          />
          <div>
            <p>{details.overview}</p>
            <p>{details.runtime}</p>

            <div>
              {details.production_companies.map((item) => (
                <li key={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                    alt=""
                  />
                  <span>{item.name}</span>
                </li>
              ))}
            </div>

            <div>
              <button>
                <CiStar /> Add to Favorites
              </button>
              <button>
                <CiHeart />
                Want to watch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h4>Bellongs to the {details.belongs_to_collection.name}</h4>

        <img
          src={`https://image.tmdb.org/t/p/original${details.belongs_to_collection.poster_path}`}
          alt=""
        />
      </div> */}
    </div>
  );
}
