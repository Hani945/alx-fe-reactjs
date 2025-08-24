import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList todos={[]} />);
  expect(screen.getByTestId("todo-list")).toBeInTheDocument();
});
