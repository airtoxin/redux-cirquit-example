import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";
import User from "./User";

export default () => (
  <Provider store={store}>
    <div>
      <Counter />
      <User />
    </div>
  </Provider>
);
