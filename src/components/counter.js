import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const updateCount = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <div>
      <h3>React redux</h3>
      <div>Count: {count}</div>
      <button value={"INCREMENT_COUNT"} onClick={updateCount}>
        GO UP
      </button>
      <button value={"DECREMENT_COUNT"} onClick={updateCount}>
        GO DOWN
      </button>
    </div>
  );
};

export default Counter;
