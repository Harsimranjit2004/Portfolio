import React from "react";
import Spinner from "../../Utils/Spinner";
import { useGetUserInfoQuery } from "../../features/userInfoApiSlice";
import UpdateUserInfo from "./UpdateUserInfo";
const FetchingData = () => {
  let content = <Spinner />;
  const { data, isSuccess } = useGetUserInfoQuery();
  if (isSuccess) {
    content = <UpdateUserInfo />;
  }
  return content;
};

export default FetchingData;
