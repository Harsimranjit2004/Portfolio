import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const notesAdapter = createEntityAdapter({});
const initialState = notesAdapter.getInitialState({});

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "/notes",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedNotes = responseData.map((notes) => {
          notes.id = notes._id;
          return notes;
        });
        return notesAdapter.setAll(initialState, loadedNotes);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Notes", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Notes", id })),
          ];
        } else return [{ type: "Notes", id: "LIST" }];
      },
    }),
    addNewNotes: builder.mutation({
      query: (initiaNotesData) => ({
        url: "/notes",
        method: "POST",
        body: {
          ...initiaNotesData,
        },
      }),
      invalidatesTags: [{ type: "Notes", id: "LIST" }],
    }),
    updateNotes: builder.mutation({
      query: (initiaNotesData) => ({
        url: "/notes",
        method: "PATCH",
        body: {
          ...initiaNotesData,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Notes", id: arg.id }],
    }),
    deleteNotes: builder.mutation({
      query: ({ id }) => ({
        url: "/notes",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Notes", id: arg.id }],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useAddNewNotesMutation,
  useUpdateNotesMutation,
  useDeleteNotesMutation,
} = notesApiSlice;

export const selectNotesResult = notesApiSlice.endpoints.getNotes.select();

const selectNotesData = createSelector(
  selectNotesResult,
  (selectNotesResult) => selectNotesResult.data
);

export const {
  selectAll: selectAllNotess,
  selectById: selectNotesById,
  selectIds: selectNotesIds,
} = notesAdapter.getSelectors(
  (state) => selectNotesData(state) ?? initialState
);
