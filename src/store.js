import { createStore } from "redux";
import * as actions from "./actionTypes";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === actions.INCREMENT_COUNT) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === actions.DECREMENT_COUNT) {
    return { ...state, count: state.count - 1 };
  }

  return state;
};

const store = createStore(reducer);

export default store;
