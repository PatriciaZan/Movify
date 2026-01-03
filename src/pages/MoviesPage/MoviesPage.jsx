import "./moviesPage.sass";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

// APIs
import { getTopMovies } from "../../services/Top";
import { getPopularMovies, getTheatherMovies } from "../../services/popular";
import Button from "../../components/Button/Button";
import UserInfo from "../../components/User/UserInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MoviesPage() {
  const navigate = useNavigate();

  //const [page, setPage] = useState("home");
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [theatherMovies, setTheatherMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  //   const handlePage = (page) => {
  //     setPage(page);
  //   };

  //   useEffect(() => {
  //     console.log("App: ", page);
  //   }, [page]);

  // * API CALLS -----------------------------------------------

  async function getTop() {
    try {
      const resTopMovies = await getTopMovies();
      const resPopularMovies = await getPopularMovies();
      const resTheatherMovies = await getTheatherMovies();

      setTopMovies(resTopMovies);
      setPopularMovies(resPopularMovies.results);
      setTheatherMovies(resTheatherMovies.results);

      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getTop();
  }, []);

  console.log("TOP MOVIES: ", topMovies);
  console.log("POPULAR MOVIES: ", popularMovies);
  console.log("THEATHER MOVIES: ", theatherMovies);

  // !
  const handleShow = (to, item) => {
    // navigate("/about", { state: { id: item } });
    navigate(to, { state: { id: item } });
    console.log("DASHBOARD ITEM: ", item);
  };

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
            src={`https://image.tmdb.org/t/p/original${popularMovies[0].backdrop_path}`}
          />
        </div>
        <div className="Dashboard">
          <div className="Dashboard-navBar">
            <NavBar className="Dashboard-navBar" />
          </div>
          <div className="Dashboard-banner-left">
            <Banner
              onHandleShow={handleShow}
              id={popularMovies[0].id}
              header={"Most Popular Movie"}
              posterBig={popularMovies[0].backdrop_path}
              title={popularMovies[0].original_title}
              overview={popularMovies[0].overview}
            />
          </div>

          <div className="Dashboard-banner-right">
            <Banner
              onHandleShow={handleShow}
              id={theatherMovies[0].id}
              header={"In Theathers Today"}
              posterBig={theatherMovies[0].backdrop_path}
              title={theatherMovies[0].original_title}
              overview={theatherMovies[0].overview}
            />
          </div>

          <div className="Dashboard-infos">
            <UserInfo
              onHandleShow={handleShow}
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
            {topMovies.results.slice(0, 7).map((item) => (
              // <Card info={topMovies} />
              <Card
                onHandleShow={handleShow}
                id={item.id}
                poster={item.poster_path}
                title={item.title}
                votes={item.vote_average}
                release={item.release_date}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
