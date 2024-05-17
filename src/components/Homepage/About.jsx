import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import myImage from "../../assets/myImg.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUserInfos } from "../../features/userInfoApiSlice";
const About = () => {
  const allUserInfo = useSelector(selectAllUserInfos);
  const navigate = useNavigate();
  return (
    <div
      data-scroll
      data-scroll-speed=".2"
      className="text-white h-auto w-max-[1200px] pb-5 border-b border-gray-700"
      id="about"
    >
      <div className="">
        <h1 className="p-4 text-center text-5xl">
          About <span className="text-green-500">Me</span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 sm:py-16 md:pl-20">
        <div className="mt-4 md:mt-0 text-left flex text-center justify-around">
          <div
            className="my-auto mx-6 flex flex-col align-center justify-center  "
            style={{ alignItems: "center" }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              I'm <span className="text-green-500">Harsimranjit Singh</span>
            </h2>
            <p className="text-base mt-5 sm:text-xl text-lg">
              {allUserInfo?.[0].HomeAbout}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="pt-10 flex gap-10 align-center justify-around"
            >
              <div className="flex flex-col border-r p-10 md:text-xl text-center">
                <div>Project Completed</div>
                <div>{allUserInfo?.[0].projects}</div>
              </div>
              <div className="flex flex-col  md:text-xl text-center  ">
                <div>Experice with Coding</div>
                <div>{allUserInfo?.[0].experience}</div>
              </div>
            </div>
            <div
              className=" w-fit px-3 py-2  mt-10 flex align-center justify-center"
              onClick={() => navigate("/About")}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className=" border-2 border-gray-300 hover:gap-5 text-white font-bold py-2 px-8 rounded  flex align-center justify-center gap-4"
              >
                <div className="ml-1">Know More</div>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 py-0"
          src={allUserInfo?.[0].image1}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
