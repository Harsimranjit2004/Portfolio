import React from "react";
import Form from "../components/Contactpage/Form";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar isHomePage={"no"} />
      <Form />
    </div>
  );
};

export default Contact;
