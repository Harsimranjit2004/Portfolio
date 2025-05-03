// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials } from "../../features/auth/authSlice";
// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_BASE_URL,
//   credentials: "include",
//   // prepareHeaders: (headers, { getState }) => {
//   //   const token = getState().auth.token;
//   //   console.log(`toekn sent in header ${ token}`)
//   //   if (token) {
//   //     headers.set("authorization", `Bearer ${token}`);
//   //   }
//   //   // headers.set("Content-Type", "application/json");
//   //   console.log(headers)
//   //   return headers;
//   // },
// });

// // const baseQueryWithReauth = async (args, api, extraOptions) => {
// //   let result = await baseQuery(args, api, extraOptions);

// //   if (result?.error?.status === 403) {
// //     console.log("sending refresh token");
// //     const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
// //     console.log(`refrest ${refreshResult}`)
// //     if (refreshResult?.data) {
// //       api.dispatch(setCredentials({ ...refreshResult.data }));
// //       result = await baseQuery(args, api, extraOptions);
// //     } else {
// //       if (refreshResult?.error?.status === 403) {
// //         refreshResult.error.data.message = "Your login has expired.";
// //       }
// //       return refreshResult;
// //     }
// //   }
// //   return result;
// // };

// export const apiSlice = createApi({
//   baseQuery: baseQuery,
//   tagTypes: ["projects"],
//   endpoints: (builder) => ({}),
// });
// This is what your main apiSlice.js file likely looks like
// Import this in your src/app/api/apiSlice.js file

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create a base query with proper error handling
const baseQuery = fetchBaseQuery({
  // Make sure this points to your actual backend API
  baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api',
  prepareHeaders: (headers, { getState }) => {
    // Get the token from auth state if it exists
    const token = getState().auth?.token;

    // If we have a token set in state, add it to the headers
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    // Always set content type for JSON requests
    headers.set('Content-Type', 'application/json');
    return headers;
  },
  // Add additional fetch options if needed
  credentials: 'include', // Important for cookies/auth
});

// Create an enhanced base query with retry logic and better error handling
const enhancedBaseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // Log any errors for debugging
  if (result.error) {
    console.error('API Error:', result.error);
  }

  return result;
};

// Create our API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: enhancedBaseQuery,
  tagTypes: ['UserInfo', 'Projects', 'Skills', 'Notes', 'Blogs', 'Education', 'Interest'],
  endpoints: builder => ({}),
});