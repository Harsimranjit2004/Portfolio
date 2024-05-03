import React from "react";
import image from "../../assets/myImg.png";
const About = () => {
  const content = (
    <div className="h-screen w-full">
      <div className="h-[70%] p-10 text-white  overflow-hidden flex flex-col align-center justify-center">
        <div className="mb-5 text-5xl">
          About <span className="text-green-500">Me</span>
        </div>
        <div className="contentContainer grid sm:grid-cols-2 justify-items-center pt-[4vh]">
          <div className="image-container w-[50%] h-[20%] ">
            <img src={image} alt="" className="object-cover" />
          </div>
          <div>description</div>
        </div>
      </div>
      <div className="h-[30%] p-10 text-white">kida fa</div>
    </div>
  );
  return content;
};

export default About;
