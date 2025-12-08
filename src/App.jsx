import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import { getTopMovies } from "./services/Top";

function App() {
  const [page, setPage] = useState("home");
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    console.log("App: ", page);
  }, [page]);

  // * API CALLS -----------------------------------------------

  async function getTop() {
    try {
      const response = await getTopMovies();
      setTopMovies(response);
      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getTop();
  }, []);

  console.log(topMovies);
  //console.log(topMovies.results[0]);

  if (loading === false) {
    return (
      <div className="Dashboard">
        <div className="Dashboard-navBar">
          <NavBar
            className="Dashboard-navBar"
            page={page}
            handlePage={handlePage}
          />
        </div>
        <div className="Dashboard-banner-left">
          <Banner>
            <>
              <h1>Most Popular movie</h1>
              {/* <img
              width={"200px"}
              src={`https://image.tmdb.org/t/p/original${topMovies.results[0].poster_path}`}
              alt={`Poster`}
            />
            <h1>{topMovies.results[0].original_title}</h1> */}
            </>
          </Banner>
        </div>

        <div className="Dashboard-banner-right">
          <Banner>
            <h1>In Theathers Today</h1>
          </Banner>
        </div>

        <div className="Dashboard-infos">
          <div>Favorites</div>
          <div>Watch list</div>
        </div>

        <div className="Dashboard-cards">
          <Card info={topMovies} />
        </div>
      </div>
    );
  }

  return (
    <>
      <p>Loading</p>
    </>
  );
}

export default App;
