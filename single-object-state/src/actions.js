import { createCirquitAction } from "redux-cirquit";

export const increment = amount => createCirquitAction(state => ({
  ...state,
  counter: {
    ...state.counter,
    count: state.counter.count + amount
  }
}), { meta: { reducerName: "increment", amount } });

export const reset = () => createCirquitAction(state => ({
  ...state,
  counter: {
    ...state.counter,
    count: 0
  }
}), { meta: { reducerName: "reset" } });

export const setUserName = name => createCirquitAction(state => ({
  ...state,
  user: {
    ...state.user,
    name
  }
}), { meta: { reducerName: "setUserName", name } });
