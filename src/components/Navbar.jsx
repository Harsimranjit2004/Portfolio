import React, { useState } from "react";
import main_logo from "../assets/main_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faHouse } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "../config/menuItems";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ isHomePage }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const onDropDownButtonClicked = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate("/login");
  };
  return (
    <div className="overflow-hidden">
      <nav
        id={`${isHomePage == "yes" ? "navbar" : ""}`}
        className={`hidden text-white  absolute ${
          isHomePage == "yes" ? "h-0" : "h-fit"
        } z-[88] md:flex items-center justify-between w-full overflow-hidden md:px-4`}
      >
        <div className="flex items-center">
          <div
            className="flex justify-center items-center object-cover w-[4vw] h-[4vw] sm:mr-6 md:mr-16 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={main_logo} alt="" className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center md:text-2xl">
          <div className="flex justify-between">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                className="sm:mx-4 cursor-pointer block z-2"
                to={item.path}
              >
                {item.name}
              </Link>
            ))}
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faHouse}
              onClick={handleAdmin}
            />
          </div>
        </div>
      </nav>
      <div className=" md:hidden absolute  h-0 z-[88]  w-full p-4 ">
        <div className="  flex align-center  justify-between ">
          <div className="flex   items-center  w-[5vh]  sm:mr-6  cursor-pointer">
            <img
              src={main_logo}
              alt=""
              className="cursor-pointer w-full h-full object-cover "
            />
          </div>
          {!isSideBarOpen && (
            <div className="burger">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white" }}
                onClick={onDropDownButtonClicked}
                className="w-[5vh]"
              />
            </div>
          )}
          {isSideBarOpen && (
            <div className="burger">
              <FontAwesomeIcon
                style={{ color: "white" }}
                icon={faClose}
                onClick={onDropDownButtonClicked}
                className=" "
              />
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
      {isSideBarOpen && (
        <div className="nav__dropdown">
          {menuItems.map((item) => (
            <div className="nav__dropdown__item text-white" key={item.name}>
              <Link
                className="nav__items"
                to={item.path}
                onClick={onDropDownButtonClicked}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
