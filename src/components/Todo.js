import React from "react";
import styled from "styled-components";

const CompletedText = styled.span`
  margin-left: 1.5rem;
`;

const Todo = ({ todo, toggleComplete }) => {
  return (
    <li onClick={() => toggleComplete(todo.id)}>
      {todo.item} *{todo.tag}
      {""}
      {todo.completed ? (
        <CompletedText>
          {`Completed ${new Date().toLocaleDateString()}`}
        </CompletedText>
      ) : null}
    </li>
  );
};

export default Todo;
