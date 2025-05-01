import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const learningsAdapter = createEntityAdapter({});
const initialState = learningsAdapter.getInitialState({});

export const learningsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLearnings: builder.query({
            query: () => "/learnings",
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            transformResponse: (responseData) => {
                const loadedLearnings = responseData.map((learning) => {
                    learning.id = learning._id;
                    return learning;
                });
                return learningsAdapter.setAll(initialState, loadedLearnings);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: "Learnings", id: "LIST" },
                        ...result.ids.map((id) => ({ type: "Learnings", id })),
                    ];
                } else return [{ type: "Learnings", id: "LIST" }];
            },
        }),
        addNewLearning: builder.mutation({
            query: (initialLearningData) => ({
                url: "/learnings",
                method: "POST",
                body: {
                    ...initialLearningData,
                },
            }),
            invalidatesTags: [{ type: "Learnings", id: "LIST" }],
        }),
        updateLearning: builder.mutation({
            query: (initialLearningData) => ({
                url: "/learnings",
                method: "PATCH",
                body: {
                    ...initialLearningData,
                },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Learnings", id: arg.id }],
        }),
        deleteLearning: builder.mutation({
            query: ({ id }) => ({
                url: "/learnings",
                method: "DELETE",
                body: { id },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Learnings", id: arg.id }],
        }),
    }),
});

export const {
    useGetLearningsQuery,
    useAddNewLearningMutation,
    useUpdateLearningMutation,
    useDeleteLearningMutation,
} = learningsApiSlice;

// Select the entire getLearnings API state
export const selectLearningsResult = learningsApiSlice.endpoints.getLearnings.select();

// Memoized selector
const selectLearningsData = createSelector(
    selectLearningsResult,
    (learningsResult) => learningsResult.data
);

// Normalized selectors
export const {
    selectAll: selectAllLearnings,
    selectById: selectLearningById,
    selectIds: selectLearningIds,
} = learningsAdapter.getSelectors(
    (state) => selectLearningsData(state) ?? initialState
);
