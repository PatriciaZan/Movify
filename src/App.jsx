import { Outlet } from "react-router-dom";
import "./App.css";

import React from "react";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
