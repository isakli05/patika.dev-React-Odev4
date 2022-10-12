import EmojiResult from "./EmojiResults";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";


it("emoji list rendernig with successfull",() => {
  render(<App/>)
  const emojiItems = screen.getAllByText("Click to copy emoji")
  expect(emojiItems.length).toEqual(20)
})
