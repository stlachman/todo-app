import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/tasks" component={TodoList} />
      </Layout>
    </Router>
  );
}

export default App;
