import { createOperation } from "redux-cirquit";

export const increment = amount => createOperation(state => ({
  ...state,
  count: state.count + amount
}), { namespace: "counter", meta: { reducerName: "increment", amount } });

export const reset = () => createOperation(state => ({
  ...state,
  count: 0
}), { namespace: "counter", meta: { reducerName: "reset" } });

export const setUserName = name => createOperation(state => ({
  ...state,
  name,
}), { namespace: "user", meta: { reducerName: "setUserName", name } });
