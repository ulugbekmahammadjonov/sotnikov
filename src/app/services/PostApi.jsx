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
      getUsers: builder.query({
         query: () => "/users",
      }),
      getAlboms: builder.query({
         query: () => "/albums",
      }),
   }),
});

export const { useGetPostsQuery, useGetUsersQuery, useGetAlbomsQuery } = postApi