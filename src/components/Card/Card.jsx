import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import "./card.css";

export default function Card({ content, type }) {
  const navigate = useNavigate();

  const getImagSrc = (item) => {
    // JIKAN
    if (item?.images?.jpg?.image_url) {
      //console.log("JINKAN");
      return item.images.jpg.image_url;
    }

    // TMDB
    if (item?.poster_path) {
      //console.log("TMDB");
      return `https://image.tmdb.org/t/p/original${item.poster_path}`;
    }

    // Fallback?
  };

  const handleNavigate = (item, type) => {
    const dataToPass = {
      item: item,
      id: item.id === undefined ? item.mal_id : item.id,
      typeToPass: type,
    };

    navigate(`about/${item.id === undefined ? item.mal_id : item.id}`, {
      state: dataToPass,
    });
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation
        // breakpoints={{
        //   // Responsividade
        //   320: { slidesPerView: 2 },
        //   768: { slidesPerView: 3 },
        //   1024: { slidesPerView: 5 },
        // }}
        loop={true}
      >
        {content.map((item) => (
          <SwiperSlide className="movie-slide">
            <div className="movie-card">
              {type === "person" ? (
                <></>
              ) : (
                <div className="movie-info">
                  {/* <NavLink to="about">About</NavLink> */}
                  <FavoriteButton item={item} />
                </div>
              )}

              <div onClick={() => handleNavigate(item, type)}>
                <img src={getImagSrc(item)} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
