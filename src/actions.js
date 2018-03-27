import { createCirquitAction } from "redux-cirquit";

export const increment = amount => createCirquitAction(state => ({
  ...state,
  counter: {
    count: state + amount
  }
}));
