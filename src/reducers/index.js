import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_TASK_INIT,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  FETCH_TASKS_INIT,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  TOGGLE_TASK_INIT,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE
} from "../actions";

const initialState = {
  isLoggingIn: false,
  loggedIn: false,
  fetchingTasks: false,
  error: "",
  id: "",
  user: {
    name: "",
    todos: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INIT:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: true,
        id: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    case ADD_TASK_INIT:
      return {
        ...state,
        error: ""
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          todos: [...state.user.todos, action.payload]
        }
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_TASKS_INIT:
      return {
        ...state,
        fetchingTasks: true,
        error: ""
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        fetchingTasks: false,
        user: {
          ...state.user,
          todos: action.payload
        }
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        fetchingTasks: false,
        error: action.payload
      };
    case TOGGLE_TASK_INIT:
      return {
        ...state,
        error: ""
      };
    case TOGGLE_TASK_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          todos: state.user.todos.map(item =>
            item.id === action.payload.id ? { ...action.payload } : item
          )
        }
      };
    case TOGGLE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    // case TOGGLE:
    //   return {
    //     ...state,
    //     todos: state.todos.map(item =>
    //       item.id === action.payload.id
    //         ? { ...item, completed: !item.completed }
    //         : item
    //     )
    //   };
    // case CLEAR:
    //   return {
    //     ...state,
    //     todos: state.filter(item => !item.completed)
    //   };
    default:
      return state;
  }
};
