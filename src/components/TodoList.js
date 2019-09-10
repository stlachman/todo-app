import React, { useReducer } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { initialState, reducer, ADD, TOGGLE, CLEAR } from "../reducers";

const TodoContainer = styled.div`
  margin: 1.25rem 0 0;
`;

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
      <TodoContainer>
        {state.map(todo => (
          <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </TodoContainer>
      <TodoForm clearCompleted={clearCompleted} addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
