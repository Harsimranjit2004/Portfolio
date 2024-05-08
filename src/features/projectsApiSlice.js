import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const projectAdapter = createEntityAdapter({});
const initialState = projectAdapter.getInitialState({});

export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProject: builder.query({
      query: () => "/projects",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedProject = responseData.map((project) => {
          project.id = project._id;
          return project;
        });
        return projectAdapter.setAll(initialState, loadedProject);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Project", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Project", id })),
          ];
        } else return [{ type: "Project", id: "LIST" }];
      },
    }),
    addNewProject: builder.mutation({
      query: (initiaProjectData) => ({
        url: "/projects",
        method: "POST",
        body: {
          ...initiaProjectData,
        },
      }),
      invalidatesTags: [{ type: "Project", id: "LIST" }],
    }),
    updateProject: builder.mutation({
      query: (initiaProjectData) => ({
        url: "/projects",
        method: "PATCH",
        body: {
          ...initiaProjectData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Project", id: arg.id },
      ],
    }),
    deleteProject: builder.mutation({
      query: ({ id }) => ({
        url: "/projects",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Project", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useAddNewProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApiSlice;

export const selectProjectResult =
  projectApiSlice.endpoints.getProject.select();

const selectProjectData = createSelector(
  selectProjectResult,
  (selectProjectResult) => selectProjectResult.data
);

export const {
  selectAll: selectAllProjects,
  selectById: selectProjectById,
  selectIds: selectProjectIds,
} = projectAdapter.getSelectors(
  (state) => selectProjectData(state) ?? initialState
);
