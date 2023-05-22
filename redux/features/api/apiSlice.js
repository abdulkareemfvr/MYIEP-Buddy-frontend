import { createApi } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-iep-buddy-server.vercel.app/",
  }),

  endpoints: (builder) => ({}),
  tagTypes: [],
});

export default apiSlice;
