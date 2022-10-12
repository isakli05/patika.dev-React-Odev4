import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";


it("emoji item copying with successfull",() => {
  render(<App/>)
  const clickedItem = screen.queryAllByTestId("emoji")
  expect(clickedItem[0]).toHaveAttribute('data-clipboard-text')
})
