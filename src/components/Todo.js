import React from "react";
import styled from "styled-components";

const TodoCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem 1.8rem;
  margin-top: 1.5rem;
  box-shadow: -2px 4px 18px rgba(0, 0, 0, 0.55);
`;

const CompletedText = styled.span`
  margin-left: 1.5rem;
`;

const StrikeThrough = styled.span`
  position: relative;
  font-size: 1.6rem;
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
  let date = new Date(todo.due_date);
  console.log(date.toLocaleDateString());
  return (
    <TodoCard onClick={() => toggleComplete(todo)}>
      <StrikeThrough completed={todo.completed}>
        {todo.task} *{todo.category}
        {""}
        {todo.completed ? (
          <CompletedText>{`${new Date().toLocaleDateString()}`}</CompletedText>
        ) : null}
      </StrikeThrough>

      <p>
        Due:{" "}
        {date <= new Date()
          ? `${date.toLocaleDateString()} Overdue item`
          : date.toLocaleDateString()}
      </p>
    </TodoCard>
  );
};

export default Todo;
