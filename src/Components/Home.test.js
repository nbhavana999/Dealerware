import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <>
      <Home />
    </>,
    div
  );
});
