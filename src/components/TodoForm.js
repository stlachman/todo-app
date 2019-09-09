import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
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
  font-size: 1.8rem;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  margin-top: 1.2rem;
`;

const Button = styled.button`
  font-family: "Work Sans", sans-serif;
  font-size: 1.5rem;
  color: #333;
  padding: 0.5rem 1.2rem;
  font-weight: 700;
  display: inline-block;
  margin: 0 0.75rem;
  border-radius: 4px;
  border: 2px solid #333;
  transition: 0.25s ease-in;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

const TodoForm = ({ addTodo, clearCompleted }) => {
  const [todo, setTodo] = useState({ task: "", tag: "" });
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = { ...todo, dueDate: startDate };
    addTodo(newTodo);
    setTodo({ task: "", tag: "" });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="task">Task</Label>
        <Input
          type="text"
          name="task"
          value={todo.task}
          onChange={handleChange}
        />
        <Label htmlFor="tag">Tag</Label>
        <Input
          type="text"
          name="tag"
          value={todo.tag}
          onChange={handleChange}
        />
        <div>
          <Label>Due Date:</Label>
          <DatePicker
            selected={startDate}
            timeCaption="time"
            dateFormat="MMMM d, yyyy"
            onChange={date => setStartDate(date)}
          />
        </div>
        <ButtonContainer>
          <Button type="submit">Add Todo</Button>
          <Button onClick={e => clearCompleted(e)}>Clear Completed</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default TodoForm;
