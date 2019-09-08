import React, { useState } from "react";

const TodoForm = ({ addTodo, clearCompleted }) => {
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(([e.target.name] = e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        Todo
        <input type="text" name="todo" value={todo} onChange={handleChange} />
      </label>
      <button type="submit">Add Todo</button>
      <button onClick={e => clearCompleted(e)}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
