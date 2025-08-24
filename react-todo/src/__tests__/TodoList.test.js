import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList and allows clicking a todo item", () => {
  const todos = ["Learn React", "Write Tests"];
  const handleClick = jest.fn();

  render(<TodoList todos={todos} onTodoClick={handleClick} />);

  // Check that todos are rendered
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write Tests")).toBeInTheDocument();

  // Simulate a click on the first todo
  fireEvent.click(screen.getByText("Learn React"));

  // Ensure the click handler was called
  expect(handleClick).toHaveBeenCalledWith("Learn React");
});
