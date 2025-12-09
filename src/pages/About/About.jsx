import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();

  const itemID = location.state.id;
  console.log("ABOUT ID LOCATION: ", itemID);

  const goDashboard = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goDashboard}> Return </button>

      {itemID}
    </div>
  );
}
