import React from "react";

const Todo = ({ todo, toggleComplete }) => {
  return (
    <li onClick={() => toggleComplete(todo.id)}>
      {todo.item}{" "}
      {todo.completed ? `Completed ${new Date().toLocaleDateString()}` : null}
    </li>
  );
};

export default Todo;
