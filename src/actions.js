import { createCirquitAction } from "redux-cirquit";

export const increment = amount => createCirquitAction(state => ({
  ...state,
  count: state.count + amount
}), { namespace: "counter", meta: { reducerName: "increment", amount } });

export const reset = () => createCirquitAction(state => ({
  ...state,
  count: 0
}), { namespace: "counter", meta: { reducerName: "reset" } });

export const setUserName = name => createCirquitAction(state => ({
  ...state,
  name,
}), { namespace: "user", meta: { reducerName: "setUserName", name } });
