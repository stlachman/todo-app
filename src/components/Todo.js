import React from "react";
import styled from "styled-components";

const CompletedText = styled.span`
  margin-left: 1.5rem;
`;

const Todo = ({ todo, toggleComplete }) => {
  return (
    <div onClick={() => toggleComplete(todo.id)}>
      <p>
        {todo.item} *{todo.tag}
      </p>
      <p>
        Due By:{" "}
        {todo.dueBy <= new Date()
          ? `Overdue item: ${todo.dueBy.toLocaleDateString()}`
          : todo.dueBy.toLocaleDateString()}
      </p>

      {""}
      {todo.completed ? (
        <CompletedText>
          {`Completed ${new Date().toLocaleDateString()}`}
        </CompletedText>
      ) : null}
    </div>
  );
};

export default Todo;
