import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";
import { Provider } from "react-redux";

import { loadState, saveState } from "./localStorage";

import App from "./App";

const persistedState = loadState();
const store = createStore(reducer, persistedState, applyMiddleware(thunk));

// Notify store's state of changes with subscribe method which will be invoked when state changes
store.subscribe(() => {
  saveState({
    user: store.getState().user
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
