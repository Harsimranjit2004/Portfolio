import React from "react";
import { useGetNotesQuery } from "../../features/notesApiSlice";
// import Cards from "../../Utils/Cards";s
const Blogs = () => {
  const { data } = useGetNotesQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  // console.log(data);
  //   const pdfURL = "https://www.clickdimensions.com/links/TestPDFfile.pdf";
  return (
    <div>
      {/* <Cards /> */}
      {/* <iframe
        src="https://www.clickdimensions.com/links/TestPDFfile.pdf"
        width={1000}
        height={500}
      /> */}
    </div>
  );
};

export default Blogs;
