import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_INIT = "LOGIN_INIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const ADD_TASK_INIT = "ADD_TASK_INIT";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_INIT });

  return axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: err, message: "Login Failed" }
      });
    });
};

export const addTodo = task => dispatch => {
  dispatch({ type: ADD_TASK_INIT });

  return axiosWithAuth()
    .post(`/tasks`, task)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_TASK_FAILURE, payload: err });
    });
};
