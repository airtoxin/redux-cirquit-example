import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";
import User from "./User";

console.log("@1", 1);

store.subscribe(() => console.log(store.getState()));

export default () => (
  <Provider store={store}>
    <div>
      <Counter />
      <User />
    </div>
  </Provider>
);
