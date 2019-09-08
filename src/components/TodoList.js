import React, { useReducer } from "react";

import TodoForm from "./TodoForm";
import { initialState, reducer, ADD } from "../reducers";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = item => {
    dispatch({ type: ADD, payload: item });
  };

  return (
    <div>
      <h2>Current Todos</h2>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>{todo.item}</li>
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
