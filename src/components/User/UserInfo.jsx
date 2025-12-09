import "./userInfo.sass";
import React from "react";

import { MdLocalMovies } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function UserInfo({ onHandleShow, favorites, watchList }) {
  return (
    <div className="UserInfo-container" onClick={() => onHandleShow("/status")}>
      <h4>
        <MdLocalMovies /> Your's Status
      </h4>
      <div className="UserInfo-infos">
        <p>You favorited</p>
        <span> {favorites} Movies </span>
        <span> {favorites} Series </span>

        <div className="UserInfo-arrow">
          <FaLongArrowAltRight />
        </div>
      </div>

      <div className="UserInfo-infos">
        <p>You want to watch</p>
        <span>{watchList} Movies</span>
        <span>{watchList} Series</span>

        <div className="UserInfo-arrow">
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
}
