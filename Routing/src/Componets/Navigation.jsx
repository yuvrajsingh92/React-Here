import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="btn px-4 py-4">
        <button
          className="bg-emerald-500 py-2 px-2 rounded-2xl"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home Page
        </button>{" "}
        <br />
        <br />
        <button
          className="bg-emerald-500 py-2 px-2 rounded-2xl"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <br />
        <br />
        <button
          className="bg-emerald-500 py-2 px-2 rounded-2xl"
          onClick={() => {
            navigate(+1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Navigation;
