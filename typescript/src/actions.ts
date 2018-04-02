import { createCirquitAction } from "redux-cirquit";
import {State} from "./store";

export const increment = (amount: number) => createCirquitAction<State>(state => ({
  ...state,
  counter: {
    count: state.counter.count + amount
  }
}), { meta: { reducerName: "increment", amount } });

export const reset = () => createCirquitAction<State>(state => ({
  ...state,
  counter: {
    count: 0
  }
}), { meta: { reducerName: "reset" } });

export const setUserName = (name: string) => createCirquitAction<State>(state => ({
  ...state,
  user: {
    name
  }
}), { meta: { reducerName: "setUserName", name } });
