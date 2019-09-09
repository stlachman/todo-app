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

const Todo = ({ todo, toggleComplete }) => {
  return (
    <TodoCard onClick={() => toggleComplete(todo.id)}>
      <p>
        {todo.item} *{todo.tag}
      </p>
      <p>
        Due:{" "}
        {todo.dueBy <= new Date()
          ? `${todo.dueBy.toLocaleDateString()} Overdue item`
          : todo.dueBy.toLocaleDateString()}
      </p>

      {""}
      {todo.completed ? (
        <CompletedText>
          {`Completed ${new Date().toLocaleDateString()}`}
        </CompletedText>
      ) : null}
    </TodoCard>
  );
};

export default Todo;
