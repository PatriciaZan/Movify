import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import SeriesPage from "./pages/SeriesPage/SeriesPage.jsx";
import AnimesPage from "./pages/AnimesPage/AnimesPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/animes" element={<AnimesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
