import * as React from "react";
import { connect } from "react-redux";
import * as actions from "./operations";
import {State} from "./store";
import {Dispatch} from "redux";

export interface Props {
  count: number;
  handleClickIncrement: (amount: number) => void;
  handleClickReset: () => void;
}

class CounterComponent extends React.Component<Props> {
  render() {
    return (
      <div style={{ border: "solid 1px" }}>
        <h1>Namespace: Counter</h1>
        <h2>count: {this.props.count}</h2>
        <button onClick={() => this.props.handleClickIncrement(1)}>increment 1</button>
        <button onClick={() => this.props.handleClickIncrement(10)}>increment 10</button>
        <button onClick={() => this.props.handleClickReset()}>reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClickIncrement: (amount: number) => {
    dispatch(actions.increment(amount));
  },
  handleClickReset: () => {
    dispatch(actions.reset())
  }
})

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
