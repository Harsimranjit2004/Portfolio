import React from "react";
import Icon from "../../assets/computer-science.png";
import { interestApiSlice } from "../../features/interestApiSlice";

const Interest = ({ id }) => {
  const { interest } = interestApiSlice.useGetInterestQuery(undefined, {
    selectFromResult: ({ data }) => ({
      interest: data?.entities[id],
    }),
  });
  console.log(interest);
  return (
    <div className="glass w-[320px] h-[300px] flex align-center justify-center flex-col">
      <div className="w-[100px] h-[100px] ">
        <img src={Icon} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="pt-4">
        <h2 className="text-center text-bold text-[4vh] ">{interest?.title}</h2>
      </div>
      <div>
        <p className="text-center">{interest?.description}</p>
      </div>
    </div>
  );
};

export default Interest;
