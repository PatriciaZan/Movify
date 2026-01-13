import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// import TopMovies from "./pages/TopMovies.jsx";
// import TopSeries from "./pages/TopSeries.jsx";
// import Search from "./pages/Search.jsx";
// import Favorites from "./pages/Favorites.jsx";
// import About from "./components/About.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About/About.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Status from "./pages/Status/Status.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import SeriesPage from "./pages/SeriesPage/SeriesPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/favorites" element={<SeriesPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
