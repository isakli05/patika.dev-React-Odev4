import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";


it("emoji item filtering with successfull",() => {
  render(<App/>)
  const input = screen.getByText("100");
  expect(input).toBeInTheDocument("100");
})
