import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 0.8rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.4rem 0.5rem;
  font-weight: 700;
  font-family: "Work Sans", sans-serif;
  transition: 0.225s all ease-in-out;

  &:focus {
    outline: 2px solid #333;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1.6rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1.2rem;
`;

const Button = styled.button`
  font-family: "Work Sans", sans-serif;
  font-size: 1.5rem;
  color: #fff;
  padding: 0.5rem 1.2rem;
  font-weight: 700;
  display: inline-block;
  margin: 0 0.75rem;
  border-radius: 4px;
  border: 0;
  transition: 0.5s;
  background-image: linear-gradient(
    to right,
    #16222a 0%,
    #3a6073 51%,
    #16222a 100%
  );

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
    background-position: right center;
  }
`;

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
    <Container>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="todo">Todo</Label>
        <Input type="text" name="todo" value={todo} onChange={handleChange} />

        <ButtonContainer>
          <Button type="submit">Add Todo</Button>
          <Button onClick={e => clearCompleted(e)}>Clear Completed</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default TodoForm;
