import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("adds a new task", () => {
  render(<TodoList />);
  
  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.click(button);

  expect(screen.getByText("Buy milk")).toBeInTheDocument();
});
