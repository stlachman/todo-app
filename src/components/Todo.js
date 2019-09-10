import React from "react";
import styled from "styled-components";

const CompletedText = styled.span`
  margin-left: 1.5rem;
`;

const StrikeThrough = styled.span`
  position: relative;
  @keyframes strike {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  ${props => {
    if (props.completed) {
      return `
      &:after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: black;
        animation-name: strike;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards; 
      }
      `;
    }
  }}
`;

const Todo = ({ todo, toggleComplete }) => {
  return (
    <li onClick={() => toggleComplete(todo.id)}>
      <StrikeThrough completed={todo.completed}>
        {todo.item} *{todo.tag}
        {""}
        {todo.completed ? (
          <CompletedText>
            {`Completed ${new Date().toLocaleDateString()}`}
          </CompletedText>
        ) : null}
      </StrikeThrough>
    </li>
  );
};

export default Todo;
