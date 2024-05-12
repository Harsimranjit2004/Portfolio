import React from "react";
import { interestApiSlice } from "../../features/interestApiSlice";

const Interest = ({ id }) => {
  const { interest } = interestApiSlice.useGetInterestQuery(undefined, {
    selectFromResult: ({ data }) => ({
      interest: data?.entities[id],
    }),
  });
  console.log(interest);
  return (
    <div>
      <div>
        <img src={interest?.img} alt="" />
      </div>
      <div>
        <h2>{interest?.title}</h2>
      </div>
      <div>
        <p>{interest?.description}</p>
      </div>
    </div>
  );
};

export default Interest;
