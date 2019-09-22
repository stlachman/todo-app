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
