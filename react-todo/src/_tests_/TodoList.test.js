import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(input);
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build a project");
    const deleteButton = todo.nextSibling;
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
