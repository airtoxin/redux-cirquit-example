import React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

const CounterComponent = ({ count, handleClickIncrement }) => (
  <div>
    <h1>count: {count}</h1>
    <button onClick={handleClickIncrement(1)}>increment 1</button>
    <button onClick={handleClickIncrement(10)}>increment 10</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  handleClickIncrement: amount => dispatch(actions.increment(amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
