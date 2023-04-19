import * as actions from "./actionTypes";

export const incrementCount = () => {
  return {
    type: actions.INCREMENT_COUNT,
    payload: null,
  };
};

export const decrementCount = () => {
  return {
    type: actions.DECREMENT_COUNT,
    payload: null,
  };
};
