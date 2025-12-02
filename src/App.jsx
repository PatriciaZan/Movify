import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";

function App() {
  const [page, setPage] = useState("home");

  const handlePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    console.log("App: ", page);
  }, [page]);

  return (
    <>
      <NavBar page={page} handlePage={handlePage} />
      <Banner />
      <Banner />
      <hr />
      <Card />
    </>
  );
}

export default App;
