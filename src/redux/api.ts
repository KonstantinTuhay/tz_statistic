import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://rcslabs.ru" }),
  endpoints: (builder) => ({
    getData1: builder.query({
      query: () => "/ttrp1.json",
      transformErrorResponse: (response) => response,
    }),
  }),
});

export const { useGetData1Query } = api;
