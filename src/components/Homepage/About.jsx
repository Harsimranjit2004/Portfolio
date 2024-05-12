import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import myImage from "../../assets/myImg.png";
const About = () => {
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
          <div className="my-auto mx-6 flex flex-col">
            <h2 className="text-4xl font-bold mb-4 text-white">
              I'm <span className="text-green-500">Harsimranjit Singh</span>
            </h2>
            <p className="text-base mt-5 sm:text-xl text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ad
              sint voluptatum adipisci fuga sunt minus voluptate reprehenderit?
              Et voluptatum quae dicta corrupti optio tempora officiis officia,
              exercitationem, debitis, asperiores nisi. Distinctio magnam
              ducimus magni iusto quod dolores, consequuntur ullam!
            </p>
            <div className="pt-10 flex gap-10 align-center justify-around">
              <div className="flex flex-col border-r p-10 md:text-xl text-center">
                <div>Project Completed</div>
                <div>10+</div>
              </div>
              <div className="flex flex-col  md:text-xl text-center  ">
                <div>Experice with Coding</div>
                <div>2+</div>
              </div>
            </div>
            <div className=" w-fit px-3 py-2  mt-10">
              <button className=" border-2 border-gray-300 hover:gap-5 text-white font-bold py-2 px-8 rounded  flex gap-4">
                <div className="ml-1"> Let's Connect</div>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 py-0"
          src={myImage}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
