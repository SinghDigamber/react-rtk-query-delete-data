import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post'],
    }),
    addNewPost: builder.mutation({
      query: (payload) => ({
        url: '/posts',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
} = apiSlice
