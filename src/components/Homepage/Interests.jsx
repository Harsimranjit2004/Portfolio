import React from "react";
import Interest from "./Interest";
import { useGetInterestQuery } from "../../features/interestApiSlice";

const Interests = () => {
  const { data } = useGetInterestQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  return (
    <div data-scroll data-scroll-speed=".1" className="h-auto">
      <div className="text-white  ">
        <div className="heading_container">
          <h2 className="p-4 pt-6 text-center text-5xl">
            Areas of <span className="text-green-500">Interest</span>
          </h2>
        </div>
        <div className="paragraph_container">
          <p className="text-center ">
            Take a look at some of the things I love working on
          </p>
        </div>
        <div className="container sm:pt-[70px] pt-[40px]   work__portfolio gap-5 p-4 pb-6">
          {data?.ids?.map((item, index) => (
            <Interest id={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
// background-color: rgba(128, 128, 128, 0.057);
// div className="interest__main">
//          <div className="interest__heading">
//             <h2 className="interest__heading__text">Areas of Interest</h2>
//          </div>
//          <div className="interest__paragraph">
//             <p className="interest__paragraph__text">
//                Take a look at some of the things I love working on{" "}
//             </p>
//          </div>
//          <div className="interest__content">
//             {data?.ids?.map((item, index) => (
//                <InterestComponent id={item} key={index} />
//             ))}
//          </div>
//       </div>
