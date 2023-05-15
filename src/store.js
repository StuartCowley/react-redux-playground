import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import { brewdogApi } from "./services/brewdog";
import { todosApi } from "./services/todos";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [brewdogApi.reducerPath]: brewdogApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([brewdogApi.middleware, todosApi.middleware])
});
