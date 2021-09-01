import React from "react";
import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new square", function () {
  const { getByLabelText, queryByText } = render(<BoxList />);

  // no square yet
  expect(queryByText("x")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");

  const submitBtn = queryByText("Make a square");

  // fill out the form
  fireEvent.change(widthInput, { target: { value: 200 } });
  fireEvent.change(heightInput, { target: { value: 200 } });
  fireEvent.change(colorInput, { target: { value: "#9932CC" } });
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("x")).toBeInTheDocument();
});
