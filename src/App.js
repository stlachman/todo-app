import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <TodoList />
      </Layout>
    </>
  );
}

export default App;
