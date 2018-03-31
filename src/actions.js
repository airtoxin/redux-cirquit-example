import { createCirquitAction } from "redux-cirquit";

export const increment = amount => createCirquitAction(state => ({
  ...state,
  counter: {
    count: state.counter.count + amount
  }
}), { name: "increment" });

export const reset = () => createCirquitAction(state => ({
  ...state,
  counter: {
    count: 0
  }
}), { name: "reset" });
