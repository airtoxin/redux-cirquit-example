import {createStore, Reducer} from "redux";
import { createCirquitReducer } from "redux-cirquit";

export interface State {
  counter: {
    count: number;
  };
  user: {
    name: string;
  };
}

const initialState: State = {
  counter: {
    count: 0
  },
  user: {
    name: "anonymous"
  }
}

export const store = createStore(
  createCirquitReducer<State>(initialState) as Reducer<State>,
  (window as any)["__REDUX_DEVTOOLS_EXTENSION__"] && (window as any)["__REDUX_DEVTOOLS_EXTENSION__"]()
);
