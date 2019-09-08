import React from "react";

const Todo = ({ todo, toggleComplete }) => {
  return <li onClick={() => toggleComplete(todo.id)}>{todo.item}</li>;
};

export default Todo;
