import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

const Login = props => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(credentials).then(() => {
      props.history.push("/tasks");
    });

    setCredentials({ name: "", password: "" });
  };

  return (
    <div>
      <h2>Login Below</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={credentials.name}
          type="text"
          name="name"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={credentials.password}
          type="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { login }
)(Login);
