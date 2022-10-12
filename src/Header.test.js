import Header from "./Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

it("header renders without crashing", () => {
  render(<Header />);
  const header = screen.getByText("Emoji Search");
  expect(header).toBeInTheDocument();  
});
