import React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

const CounterComponent = ({ count, handleClickIncrement, handleClickReset }) => (
  <div>
    <h1>count: {count}</h1>
    <button onClick={() => handleClickIncrement(1)}>increment 1</button>
    <button onClick={() => handleClickIncrement(10)}>increment 10</button>
    <button onClick={() => handleClickReset()}>reset</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  handleClickIncrement: amount => dispatch(actions.increment(amount)),
  handleClickReset: () => dispatch(actions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
