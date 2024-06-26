import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
   reducerPath: "postApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com",
   }),
   endpoints: (builder) => ({
      getPosts: builder.query({
         query: () => "/posts",
      }),
   }),
});

export const { useGetPostsQuery } = postApi