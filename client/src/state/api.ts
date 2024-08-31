// this will allow us make api calls while using redux js and toolkit

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: [],
  // empty object
  endpoints: (build) => ({}),
});

export const {} = api;
