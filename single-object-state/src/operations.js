import { createOperation } from "redux-cirquit";

export const increment = amount => createOperation(state => ({
  ...state,
  counter: {
    ...state.counter,
    count: state.counter.count + amount
  }
}), { meta: { reducerName: "increment", amount } });

export const reset = () => createOperation(state => ({
  ...state,
  counter: {
    ...state.counter,
    count: 0
  }
}), { meta: { reducerName: "reset" } });

export const setUserName = name => createOperation(state => ({
  ...state,
  user: {
    ...state.user,
    name
  }
}), { meta: { reducerName: "setUserName", name } });
