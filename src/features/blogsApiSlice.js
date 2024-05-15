import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const blogsAdapter = createEntityAdapter({});
const initialState = blogsAdapter.getInitialState({});
export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedBlogs = responseData.map((blogs) => {
          blogs.id = blogs._id;
          return blogs;
        });
        return blogsAdapter.setAll(initialState, loadedBlogs);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Blogs", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Blogs", id })),
          ];
        } else return [{ type: "Blogs", id: "LIST" }];
      },
    }),
    addNewBlogs: builder.mutation({
      query: (initiaBlogsData) => ({
        url: "/blogs",
        method: "POST",
        body: {
          ...initiaBlogsData,
        },
      }),
      invalidatesTags: [{ type: "Blogs", id: "LIST" }],
    }),
    updateBlogs: builder.mutation({
      query: (initiaBlogsData) => ({
        url: "/blogs",
        method: "PATCH",
        body: {
          ...initiaBlogsData,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Blogs", id: arg.id }],
    }),
    deleteBlogs: builder.mutation({
      query: ({ id }) => ({
        url: "/blogs",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Blogs", id: arg.id }],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddNewBlogsMutation,
  useUpdateBlogsMutation,
  useDeleteBlogsMutation,
} = blogsApiSlice;

export const selectBlogsResult = blogsApiSlice.endpoints.getBlogs.select();

const selectBlogsData = createSelector(
  selectBlogsResult,
  (selectBlogsResult) => selectBlogsResult.data
);

export const {
  selectAll: selectAllBlogss,
  selectById: selectBlogsById,
  selectIds: selectBlogsIds,
} = blogsAdapter.getSelectors(
  (state) => selectBlogsData(state) ?? initialState
);
