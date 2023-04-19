import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT_COUNT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "DECREMENT_COUNT") {
    return { ...state, count: state.count - 1 };
  }

  return state;
};

const store = createStore(reducer);

export default store;
