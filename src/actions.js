import { createCirquitAction } from "redux-cirquit";

export const increment = amount => createCirquitAction(state => ({
  ...state,
  count: state.count + amount
}), { name: "increment", namespace: "counter" });

export const reset = () => createCirquitAction(state => ({
  ...state,
  count: 0
}), { name: "reset", namespace: "counter" });

export const setUserName = name => createCirquitAction(state => ({
  ...state,
  name,
}), { name: "setUserName", namespace: "user" });
