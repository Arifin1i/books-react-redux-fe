/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),
    getLatestBooks: builder.query({
      query: () => "/latestBooks",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    deleteSingleBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    reviewComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviewComments"],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["reviewComments"],
    }),
  }),
});

export const {
  useDeleteSingleBookMutation,
  useCreateBookMutation,
  useGetBooksQuery,
  useSingleBookQuery,
  useReviewCommentMutation,
  useGetCommentQuery,
  useGetLatestBooksQuery,
} = bookApi;
