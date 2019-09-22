import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTodos } from "../actions";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoContainer = styled.div`
  margin: 1.25rem 0 0;
`;

const TodoList = props => {
  const { getTodos } = props;
  const id = localStorage.getItem("id");
  console.log(props);
  useEffect(() => {
    getTodos(id);
  }, [getTodos, id]);
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const addTodo = item => {
  //   dispatch({
  //     type: ADD,
  //     payload: {
  //       dueBy: item.dueDate,
  //       item: item.task,
  //       tag: item.tag,
  //       id: Date.now(),
  //       completed: false
  //     }
  //   });
  // };

  // const toggleComplete = id => {
  //   dispatch({ type: TOGGLE, payload: { id } });
  // };

  // const clearCompleted = e => {
  //   e.preventDefault();
  //   dispatch({ type: CLEAR });
  // };

  return (
    <div>
      <h2>Current Todos</h2>
      <TodoContainer>
        {props.user.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoContainer>
      <TodoForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchingTasks: state.fetchingTasks,
    user: {
      name: state.user.name,
      todos: state.user.todos
    },
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getTodos }
)(TodoList);
