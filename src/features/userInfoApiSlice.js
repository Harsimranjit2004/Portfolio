import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const userInfoAdapter = createEntityAdapter({});
const initialState = userInfoAdapter.getInitialState({});

export const userInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/userInfo",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedUserInfo = responseData.map((userInfo) => {
          userInfo.id = userInfo._id;
          return userInfo;
        });
        return userInfoAdapter.setAll(initialState, loadedUserInfo);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "UserInfo", id: "LIST" },
            ...result.ids.map((id) => ({ type: "UserInfo", id })),
          ];
        } else return [{ type: "UserInfo", id: "LIST" }];
      },
    }),
    addNewUserInfo: builder.mutation({
      query: (initiaUserInfoData) => ({
        url: "/userInfo",
        method: "POST",
        body: {
          ...initiaUserInfoData,
        },
      }),
      invalidatesTags: [{ type: "UserInfo", id: "LIST" }],
    }),
    updateUserInfo: builder.mutation({
      query: (initiaUserInfoData) => ({
        url: "/userInfo",
        method: "PATCH",
        body: {
          ...initiaUserInfoData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "UserInfo", id: arg.id },
      ],
    }),
    deleteUserInfo: builder.mutation({
      query: ({ id }) => ({
        url: "/userInfo",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "UserInfo", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useAddNewUserInfoMutation,
  useUpdateUserInfoMutation,
  useDeleteUserInfoMutation,
} = userInfoApiSlice;

export const selectUserInfoResult =
  userInfoApiSlice.endpoints.getUserInfo.select();

const selectUserInfoData = createSelector(
  selectUserInfoResult,
  (selectUserInfoResult) => selectUserInfoResult.data
);

export const {
  selectAll: selectAllUserInfos,
  selectById: selectUserInfoById,
  selectIds: selectUserInfoIds,
} = userInfoAdapter.getSelectors(
  (state) => selectUserInfoData(state) ?? initialState
);
