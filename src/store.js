import { createStore } from "redux";
import { createCirquitReducer } from "redux-cirquit";

const initialState = {
  counter: {
    count: 0
  }
};

export default createStore(
  createCirquitReducer(initialState),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
