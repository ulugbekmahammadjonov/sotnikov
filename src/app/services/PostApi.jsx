import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["postlar"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["postlar"],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getAlboms: builder.query({
      query: () => "/albums",
    }),
    getComments: builder.query({
      query: () => "/comments",
    }),
    addPost: builder.mutation({
      query: ({ title, body, user, url }) => ({
        url,
        method: "POST",
        body: { title, body, userId: user },
      }),
      invalidatesTags: ["postlar"],
    }),
     editPost: builder.mutation({
         query: ({ id, title, body, user, url }) => ({
            url: `${url}/${id}`,
            method: "PUT",
            body: { title, body, userId: user },
         }),
     }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetAlbomsQuery,
  useGetCommentsQuery,
  useAddPostMutation,
  useEditPostMutation
} = postApi;
