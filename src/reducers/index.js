import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  isLoggingIn: false,
  loggedIn: false,
  error: "",
  id: "",
  user: {
    name: "",
    todos: [
      {
        item: "Learn about reducers",
        completed: false,
        dueBy: new Date("September 08, 2019"),
        tag: "technical",
        id: 3892987589
      }
    ]
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
    // case ADD:
    //   return {
    //     ...state,
    //     todos: [...state.todos, action.payload]
    //   };
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
