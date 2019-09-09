import React, { useReducer } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { initialState, reducer, ADD, TOGGLE, CLEAR } from "../reducers";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = item => {
    dispatch({
      type: ADD,
      payload: {
        dueBy: item.dueDate,
        item: item.task,
        tag: item.tag,
        id: Date.now(),
        completed: false
      }
    });
  };

  const toggleComplete = id => {
    dispatch({ type: TOGGLE, payload: { id } });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: CLEAR });
  };

  return (
    <div>
      <h2>Current Todos</h2>
      <div>
        {state.map(todo => (
          <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </div>
      <TodoForm clearCompleted={clearCompleted} addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
