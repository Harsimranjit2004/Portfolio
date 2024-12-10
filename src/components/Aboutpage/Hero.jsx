import React, { useEffect } from "react";
import "./about.css";
import { TypeAnimation } from "react-type-animation";
import { applyRevealAnimation } from "../../Utils/animationsUtils";
import { loader } from "../../Utils/animationsUtils";
import myImg from "../../assets/myImg.png";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { selectAllUserInfos } from "../../features/userInfoApiSlice";
const Hero = () => {
  const allUserInfo = useSelector(selectAllUserInfos);
  useEffect(() => {
    applyRevealAnimation(".reveal");
    loader();
  }, []);

  const contents = (
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
    
    <div className=" h-screen bg-zinc-900 text-white flex justify-center items-center pt-16 px-6 md:px-12" id="hero-section">
      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto rounded-full overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay:2 }}
        >
          <img
            src={myImg}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Right Section: Text Content */}
        <div className="text-center md:text-left space-y-6">
          {/* Greeting */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi There 👋
          </motion.h1>

          {/* Name and Role */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I'm <span className="text-green-500">Harsimranjit Singh</span>
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            I specialize in{" "}
            <TypeAnimation
              sequence={[
                "Web Development",
                2000,
                "Machine Learning",
                2000,
                "Artificial Intelligence",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor="|"
              style={{ color: "#21c55d" }}
            />
          </motion.h3>

          {/* About Me */}
          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-[600px] mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            I’m passionate about creating scalable and efficient solutions in
            web development, machine learning, and artificial intelligence.
            Let’s build something amazing together!
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <a
              href="#contact"
              className="bg-green-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-green-600 transition duration-300 shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="border-2 border-green-500 text-green-500 px-6 py-2 rounded-full text-lg font-medium hover:bg-green-500 hover:text-white transition duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );

  return contents;
};

export default Hero;
