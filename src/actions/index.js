import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_INIT = "LOGIN_INIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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

export const FETCH_TASKS_INIT = "FETCH_TASKS_INIT";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const getTodos = id => dispatch => {
  dispatch({ type: FETCH_TASKS_INIT });

  return axiosWithAuth()
    .get(`/users/${id}/tasks`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_TASKS_FAILURE, payload: err });
    });
};

export const ADD_TASK_INIT = "ADD_TASK_INIT";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

export const addTodo = task => dispatch => {
  dispatch({ type: ADD_TASK_INIT });

  return axiosWithAuth()
    .post(`/tasks`, task)
    .then(res => {
      dispatch({ type: ADD_TASK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_TASK_FAILURE, payload: err });
    });
};
