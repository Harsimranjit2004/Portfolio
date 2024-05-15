import React from "react";
import Note from "./Note";
import { useGetNotesQuery } from "../../features/notesApiSlice";

const Notes = () => {
  // const {data} = useGetNotesQuery(undefined, )
  const { data } = useGetNotesQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  // console.log(data);
  return (
    <div className="work__portfolio gap-5 p-4 pb-6">
      {data?.ids?.map((item, index) => (
        <Note id={item} key={index} />
      ))}
    </div>
  );
};

export default Notes;
