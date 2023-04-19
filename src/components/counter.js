import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actionTypes";
import { incrementCount, decrementCount } from "../actions";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(1);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const updateCount = (e) => {
    if (e.target.value === actions.INCREMENT_COUNT) {
      dispatch(incrementCount(incrementAmount));
    }
    if (e.target.value === actions.DECREMENT_COUNT) {
      dispatch(decrementCount(incrementAmount));
    }
  };

  const handleIncrementUpdate = (e) => {
    if (e.target.value === "+") {
      setIncrementAmount((prev) => prev + 1);
    }
    if (e.target.value === "-") {
      setIncrementAmount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h3>React redux</h3>
      <div>Count: {count}</div>
      <div className="counter__increment-editor-wrap">
        <span>Increment value: </span>
        <input
          onChange={(event) => setIncrementAmount(Number(event.target.value))}
          value={incrementAmount}
          type="number"
        />
        <button value={"+"} onClick={handleIncrementUpdate}>
          +
        </button>
        <button value={"-"} onClick={handleIncrementUpdate}>
          -
        </button>
      </div>
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
