import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        data-testid="task-input"
      />
      <button onClick={handleAdd} data-testid="add-button">
        Add Task
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} data-testid="todo-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

