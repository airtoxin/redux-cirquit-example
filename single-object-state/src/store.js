import { createStore, combineReducers } from "redux";
import { createCirquitReducer } from "redux-cirquit";

const initialState = {
  counter: {
    count: 0
  },
  user: {
    name: "anonymous"
  }
};

export default createStore(
  createCirquitReducer(initialState),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
