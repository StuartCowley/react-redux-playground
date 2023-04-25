import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./features/counter/CounterSlice";
import { brewdogApi } from "./services/brewdog";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [brewdogApi.reducerPath]: brewdogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(brewdogApi.middleware),
});

setupListeners(store.dispatch);
