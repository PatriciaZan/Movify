import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import SeriesPage from "./pages/SeriesPage/SeriesPage.jsx";
import AnimesPage from "./pages/AnimesPage/AnimesPage.jsx";
import About from "./components/About/About.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MoviesPage />}>
          <Route path="" element={<Favorites />} />
          <Route path="about/:itemId" element={<About />} />
        </Route>
        <Route path="/series" element={<SeriesPage />}>
          <Route path="" element={<Favorites />} />
          <Route path="about/:itemId" element={<About />} />
        </Route>

        <Route path="animes" element={<AnimesPage />}>
          <Route path="" element={<Favorites />} />
          <Route path="about/:itemId" element={<About />} />
        </Route>

        {/* <Route path="/about/:itemId" element={<AboutPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
);
