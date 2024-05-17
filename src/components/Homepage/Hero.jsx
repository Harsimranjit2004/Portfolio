import React, { useEffect } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  animateReveal,
  applyRevealAnimation,
  loader,
} from "../../Utils/animationsUtils";
import Navbar from "../Navbar";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import DisplayHeader from "../DisplayHeader";
const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    applyRevealAnimation(".reveal");
    loader();
  }, []);
  const content = (
    <div className="hero__main text-white">
      <Navbar isHomePage={"yes"} />
      <div id="loader" className="w-full h-screen relative z-[9]">
        <div className="flex flex-col items-center justify-center">
          <h5 className="reveal text-4xl">AI & ML</h5>
          <h5 className="reveal">&copy; 2024</h5>
        </div>
        <h1 className="reveal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5.5vw]">
          <span className="md:text-[5vw] lg:text-[6.5vw]">Harsimranjit</span>{" "}
          <span className="md:text-[5vw] lg:text-[6.5vw]">Singh</span>
        </h1>
      </div>
      <div id="green"></div>

      <div id="section1" className="grid min-h-screen border-b border-gray-700">
        <h1 className="text-center sm:text-9xl text-[11vw] ">AI & ML</h1>
        <h1 className="flex justify-center items-center md:text-9xl text-[11vw] ">
          Devel
          <span>
            <svg
              className="c-bttn__morph text-9xl"
              fill="none"
              viewBox="0 0 131 136"
            >
              <path
                className="g-path"
                data-morph="end"
                fill="#fff"
                d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
              ></path>
              <path
                className="g-path"
                data-morph="start"
                fill="#fff"
                d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
                data-original="M65.72 109.14c10.08 0 17.76-3.78 23.04-11.34 5.4-7.68 8.1-17.64 8.1-29.88 0-12.24-2.7-22.2-8.1-29.88-5.28-7.68-12.96-11.52-23.04-11.52-9.96 0-17.7 3.84-23.22 11.52-5.4 7.68-8.1 17.64-8.1 29.88 0 12.12 2.7 22.02 8.1 29.7 5.52 7.68 13.26 11.52 23.22 11.52Zm46.08 7.02c-11.64 12.6-27.06 18.9-46.26 18.9s-34.62-6.3-46.26-18.9C7.76 103.56 2 87.48 2 67.92c0-19.56 5.76-35.64 17.28-48.24C30.92 7.08 46.34.78 65.54.78s34.62 6.3 46.26 18.9c11.64 12.6 17.46 28.68 17.46 48.24 0 19.56-5.82 35.64-17.46 48.24Z"
              ></path>
            </svg>
          </span>
          per
        </h1>
        <div className="w-full grid justify-items-center justify-around sm:grid-cols-3 md:grid-cols-3 md:px-[10vw] lg:px-[17vw] gap-2 pt-[4vh] ">
          {["Data Science", "Machine Learning", "Web Development"].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className={`px-3 py-2 text-white rounded-full border-2 border-zinc-100`}
                >
                  {item}
                </div>
              );
            }
          )}
        </div>
        <div className="flex  flex-col gap-3 sm:flex-row justify-center mt-8 pb-4">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className=" border-2 border-gray-300 hover:gap-5 text-white font-bold py-2 px-8 rounded  flex gap-4 align-center justify-center"
            onClick={() => navigate("/Contact")}
          >
            <div className="ml-1"> Let's Connect</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="border-2 border-green-500 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded flex align-center justify-center gap-4 "
          >
            <FontAwesomeIcon icon={faDownload} />
            <div className="ml-1">Resume</div>
          </button>
        </div>
      </div>
    </div>
  );
  return content;
};

export default Hero;
