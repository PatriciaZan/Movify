import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const { state } = location;

  console.log(state);

  if (!state) {
    return <p>Error reciving the data </p>;
  }

  //const { item } = state;
  return (
    <div>
      About
      {/* <p>{item.title}</p> */}
    </div>
  );
}
