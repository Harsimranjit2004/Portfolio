import React from "react";
import Form from "../components/Contactpage/Form";
import Navbar from "../components/Navbar";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
import Spinner from "../Utils/Spinner";

const Contact = () => {
  const { data, isSuccess } = useGetUserInfoQuery();
  let content = <Spinner />;
  if (isSuccess) {
    content = (
      <div>
        <Navbar isHomePage={"no"} />
        <Form />
      </div>
    );
  }
  return content;
};

export default Contact;
