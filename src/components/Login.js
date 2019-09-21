import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login Below</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </form>
    </div>
  );
};

export default Login;
