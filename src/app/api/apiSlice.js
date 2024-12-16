import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../../features/auth/authSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: "include",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = getState().auth.token;
  //   console.log(`toekn sent in header ${ token}`)
  //   if (token) {
  //     headers.set("authorization", `Bearer ${token}`);
  //   }
  //   // headers.set("Content-Type", "application/json");
  //   console.log(headers)
  //   return headers;
  // },
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 403) {
//     console.log("sending refresh token");
//     const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
//     console.log(`refrest ${refreshResult}`)
//     if (refreshResult?.data) {
//       api.dispatch(setCredentials({ ...refreshResult.data }));
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       if (refreshResult?.error?.status === 403) {
//         refreshResult.error.data.message = "Your login has expired.";
//       }
//       return refreshResult;
//     }
//   }
//   return result;
// };

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["projects"],
  endpoints: (builder) => ({}),
});
