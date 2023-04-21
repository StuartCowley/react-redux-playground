import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import randomBeerReducer from "./features/randomBeer/RandomBeerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    randomBeer: randomBeerReducer,
  },
});
