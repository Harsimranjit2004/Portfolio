import React from "react";
import Icon from "../../assets/computer-science.png";
import {
  interestApiSlice,
  useDeleteInterestMutation,
} from "../../features/interestApiSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Interest = ({ id }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [deleteInterest] = useDeleteInterestMutation();
  const { interest } = interestApiSlice.useGetInterestQuery(undefined, {
    selectFromResult: ({ data }) => ({
      interest: data?.entities[id],
    }),
  });
  const handleUpdateButton = () => {
    navigate(`/interest-update/${id}`);
  };
  const handleDeleteButton = async () => {
    await deleteInterest({ id });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="glass w-[320px] min-h-[300px] flex align-center justify-center flex-col"
    >
      <div className="w-[100px] h-[100px] ">
        <img
          src={interest?.img}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="pt-4">
        <h2 className="text-center text-bold text-[4vh] ">{interest?.title}</h2>
      </div>
      <div>
        <p className="text-center">{interest?.description}</p>
      </div>
      {isAuthenticated && (
        <div className="flex gap-5 mt-2">
          <button
            className="bg-green-500 p-2 rounded-full  "
            onClick={handleUpdateButton}
          >
            Update
          </button>
          <button
            className="bg-green-500 p-2 rounded-full"
            onClick={handleDeleteButton}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Interest;
