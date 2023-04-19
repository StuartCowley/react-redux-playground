import { createStore } from "redux";
import * as actions from "./actionTypes";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === actions.INCREMENT_COUNT) {
    return { ...state, count: state.count + action.payload };
  }
  if (action.type === actions.DECREMENT_COUNT) {
    return { ...state, count: state.count - action.payload };
  }

  return state;
};

const store = createStore(reducer);

export default store;
