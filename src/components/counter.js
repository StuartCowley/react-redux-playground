import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actionTypes";
import { incrementCount, decrementCount } from "../actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const updateCount = (e) => {
    if (e.target.value === actions.INCREMENT_COUNT) {
      dispatch(incrementCount());
    } else {
      dispatch(decrementCount());
    }
  };

  return (
    <div>
      <h3>React redux</h3>
      <div>Count: {count}</div>
      <button value={actions.INCREMENT_COUNT} onClick={updateCount}>
        GO UP
      </button>
      <button value={actions.DECREMENT_COUNT} onClick={updateCount}>
        GO DOWN
      </button>
    </div>
  );
};

export default Counter;
