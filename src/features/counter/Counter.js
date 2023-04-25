import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./CounterSlice";

const Counter = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleReset = () => {
    setValue(0);
    dispatch(reset());
  };

  return (
    <div>
      <p>{count}</p>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(Number(value)))}>
          Update by value
        </button>
      </div>
    </div>
  );
};

export default Counter;
