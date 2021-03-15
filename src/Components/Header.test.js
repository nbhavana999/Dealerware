import React from "react";
import Header from "../Components/Header";
import { render, screen } from "@testing-library/react";
import "../cssFiles/header.scss";

describe("Header", () => {
  test("renders App component", () => {
    render(<Header />);
    screen.getByTestId("ancestor");

    expect(screen.getByTestId("ancestor")).toBeInTheDocument();
    screen.debug();
  });
});
