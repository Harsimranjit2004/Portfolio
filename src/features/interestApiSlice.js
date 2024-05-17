import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const interestAdapter = createEntityAdapter({});
const initialState = interestAdapter.getInitialState({});
export const interestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterest: builder.query({
      query: () => "/interests",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedInterest = responseData.map((interest) => {
          interest.id = interest._id;
          return interest;
        });
        return interestAdapter.setAll(initialState, loadedInterest);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Interest", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Interest", id })),
          ];
        } else return [{ type: "Interest", id: "LIST" }];
      },
    }),
    addNewInterest: builder.mutation({
      query: (initiaInterestData) => ({
        url: "/interests",
        method: "POST",
        body: {
          ...initiaInterestData,
        },
      }),
      invalidatesTags: [{ type: "Interest", id: "LIST" }],
    }),
    updateInterest: builder.mutation({
      query: (initiaInterestData) => ({
        url: "/interests",
        method: "PATCH",
        body: {
          ...initiaInterestData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Interest", id: arg.id },
      ],
    }),
    deleteInterest: builder.mutation({
      query: ({ id }) => ({
        url: "/interests",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Interest", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetInterestQuery,
  useAddNewInterestMutation,
  useUpdateInterestMutation,
  useDeleteInterestMutation,
} = interestApiSlice;

export const selectInterestResult =
  interestApiSlice.endpoints.getInterest.select();

const selectInterestData = createSelector(
  selectInterestResult,
  (selectInterestResult) => selectInterestResult.data
);

export const {
  selectAll: selectAllInterests,
  selectById: selectInterestById,
  selectIds: selectInterestIds,
} = interestAdapter.getSelectors(
  (state) => selectInterestData(state) ?? initialState
);
