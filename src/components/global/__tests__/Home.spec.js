import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

test("it renders to the screen", () => {
  const { getByText } = render(<Home />);
  getByText("Login");
});
