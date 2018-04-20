import React from "react";
import { connect } from "react-redux";
import * as actions from "./operations";

const CounterComponent = ({ count, handleClickIncrement, handleClickReset }) => (
  <div style={{ border: "solid 1px" }}>
    <h2>count: {count}</h2>
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
