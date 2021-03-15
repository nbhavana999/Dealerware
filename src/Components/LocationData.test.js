import React from "react";
import ReactDOM from "react-dom";
import "../cssFiles/LocationData.scss";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <div className="individualBlocker">
      <div className="blackBar"></div>
      <div className="contentAndInfo">
        <div className="headingTitle">Austin - Audi North Austin </div>
        <div className="locateContent">
          <img src="/static/media/hotel.0e99eae3.svg" className="svgSize" />
          <div className="locationDesc">
            Dealership - Austin - Audi North Austin
          </div>
        </div>
      </div>
    </div>,
    div
  );
});
