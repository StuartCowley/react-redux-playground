import * as actions from "./actionTypes";

export const incrementCount = (value) => {
  return {
    type: actions.INCREMENT_COUNT,
    payload: value,
  };
};

export const decrementCount = (value) => {
  return {
    type: actions.DECREMENT_COUNT,
    payload: value,
  };
};
