import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const brewdogApi = createApi({
  reducerPath: "brewdogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/beers/" }),
  endpoints: (builder) => ({
    getSelection: builder.query({
      query: () => "",
    }),
    fetchRandomBeer: builder.query({
      query: () => "random",
    }),
  }),
});

export const { useGetSelectionQuery, useFetchRandomBeerQuery } = brewdogApi;
