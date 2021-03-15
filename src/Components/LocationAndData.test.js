import React from "react";
import ReactDOM from "react-dom";
import LocationAndData from "../Components/LocationAndData";
import "../cssFiles/LocationAndData.scss";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <div className="dataContent">
      <div className="dataHeader">Choose Location</div>
      <div className="searchPath"></div>
    </div>,
    div
  );
});
