import React from "react";
import { useNavigate } from "react-router-dom";

export default function Status() {
  const navigate = useNavigate();
  const goDashboard = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goDashboard}> Return </button>
      Status
    </div>
  );
}
