import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const educationAdapter = createEntityAdapter({});
const initialState = educationAdapter.getInitialState({});
export const educationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEducation: builder.query({
      query: () => "/educations",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedEducation = responseData.map((education) => {
          education.id = education._id;
          return education;
        });
        return educationAdapter.setAll(initialState, loadedEducation);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Education", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Education", id })),
          ];
        } else return [{ type: "Education", id: "LIST" }];
      },
    }),
    addNewEducation: builder.mutation({
      query: (initiaEducationData) => ({
        url: "/educations",
        method: "POST",
        body: {
          ...initiaEducationData,
        },
      }),
      invalidatesTags: [{ type: "Education", id: "LIST" }],
    }),
    updateEducation: builder.mutation({
      query: (initiaEducationData) => ({
        url: "/educations",
        method: "PATCH",
        body: {
          ...initiaEducationData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Education", id: arg.id },
      ],
    }),
    deleteEducation: builder.mutation({
      query: ({ id }) => ({
        url: "/educations",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Education", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetEducationQuery,
  useAddNewEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApiSlice;

export const selectEducationResult =
  educationApiSlice.endpoints.getEducation.select();

const selectEducationData = createSelector(
  selectEducationResult,
  (selectEducationResult) => selectEducationResult.data
);

export const {
  selectAll: selectAllEducations,
  selectById: selectEducationById,
  selectIds: selectEducationIds,
} = educationAdapter.getSelectors(
  (state) => selectEducationData(state) ?? initialState
);
