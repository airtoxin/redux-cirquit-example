import { createStore, combineReducers } from "redux";
import { createCirquitReducer } from "redux-cirquit";

const reducers = combineReducers({
  counter: createCirquitReducer({ count: 0 }, { namespace: "counter" }),
  user: createCirquitReducer({ name: "anonymous" }, { namespace: "user" })
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
