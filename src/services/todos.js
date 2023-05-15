import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todosApi;
