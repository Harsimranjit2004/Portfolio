import React from "react";
import "./about.css";
import { TypeAnimation } from "react-type-animation";
import demo from "../../assets/demo.png";
import main from "../../assets/main.png";
import myImg from "../../assets/myImg.png";
import { motion } from "framer-motion";
const Hero = () => {
  const content = (
    <div className=" h-sc bg-zinc-900 text-white pt-[4rem] flex align-center justify-center  border-b border-gray-700 ">
      {/* <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="8.1588"
              strokeMiterlimit="7"
              d="M273.2984313964844,337.69635009765625C229.5811538696289,312.1727879842122,164.0052286783854,213.74345906575522,192.4083709716797,186.91099548339844C220.81151326497397,160.07853190104166,400.00000762939453,151.17800649007162,443.71728515625,176.70156860351562C487.43456268310547,202.22513071695963,483.11517842610675,313.21990458170575,454.7120361328125,340.0523681640625C426.30889383951825,366.88483174641925,317.01570892333984,363.2199122111003,273.2984313964844,337.69635009765625C229.5811538696289,312.1727879842122,164.0052286783854,213.74345906575522,192.4083709716797,186.91099548339844"
            />
          </clipPath>
        </defs>
      </svg> */}

      <div className=" max-w-[2000px] w-full my-16 flex md:flex-row flex-col justify-evenly gap-10 items-center">
        <div className="flex">
          <div className="w-[500px] h-[500px]">
            <img
              src={myImg}
              width={550}
              className="w-full h-full object-cover object-top clip-path"
            />
          </div>
        </div>
        <div className="line-height-2 p-4">
          {" "}
          {/* Adjusted width */}
          <h1 className="text-4xl lg:text-6xl md:text-5xl">Hi There 👋</h1>{" "}
          {/* Adjusted text size */}
          <h1 className="text-2xl lg:text-3xl ">
            I'm{" "}
            <span className="text-4xl lg:text-6xl md: text-5xl text-green-500">
              Harsimranjit Singh
            </span>
          </h1>
          <h3 className="text-xl md:text-3xl pt-4">
            {" "}
            {/* Adjusted text size */}I am into{" "}
            <TypeAnimation
              sequence={[
                "Web Development",
                2000,
                "Machine Learning",
                2000,
                "Artificial Intelligence",
                2000,
              ]}
              speed={5}
              repeat={Infinity}
              cursor="|"
              style={{ color: "#21c55d" }}
            />
          </h3>
          <p className=" md:text-lg max-w-[700px] pt-8">
            {" "}
            {/* Adjusted text size */}I'm a dedicated developer specializing in
            artificial intelligence, machine learning, deep learning, and web
            development. With a focus on crafting cutting-edge solutions, I aim
            to leverage technology to its fullest potential, ensuring remarkable
            outcomes and seamless user experiences
          </p>
        </div>
      </div>
    </div>
  );
  return content;
  <div className="h-screen bg-zinc-900 text-white pt-[4rem] flex align-center justify-center  ">
    <div className=" w-full flex md:flex-row flex-col justify-evenly gap-10 items-center">
      <div className="flex ">
        <div className="w-[500px] h-[500px]">
          <img
            src={myImg}
            width={550}
            className="w-full h-full object-cover clip-path"
          />
        </div>
      </div>
      <div className="line-height-2">
        <h1 className="text-6xl">Hi There 👋</h1>
        <h1 className="text-3xl">
          I'm{" "}
          <span className="text-6xl text-green-500">Harsimranjit Singh</span>
        </h1>
        <h3 className="text-3xl pt-4  ">
          I am into{" "}
          <TypeAnimation
            sequence={
              [
                "Web Development",
                2000,
                "Machine Learning",
                2000,
                "Artificial Intelligence",
                2000,
              ]
              // { ...allUserInfo?.[0]?.roles }
            }
            speed={5}
            repeat={Infinity}
            cursor="|"
            style={{ color: "#21c55d" }}
          />
        </h3>
        <p className="text-base ">
          a dedicated developer specializing in artificial intelligence, machine
          learning, deep learning, and web development. With a focus on crafting
          cutting-edge solutions, I aim to leverage technology to its fullest
          potential, ensuring remarkable outcomes and seamless user experiences
        </p>
      </div>
    </div>
  </div>;
};

export default Hero;
