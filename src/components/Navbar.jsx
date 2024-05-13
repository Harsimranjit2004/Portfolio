import React from "react";
import main_logo from "../assets/main_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "../config/menuItems";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate("/admin");
  };
  return (
    // <div className="overflow-hidden ">
    //   <nav
    //     id="navbar"
    //     className=" hidden text-white absolute z-[2] md:flex items-center justify-between h-0 w-full  overflow-hidden"
    //   >
    //     <div className="flex items-center">
    //       {/* Logo */}
    //       <div className="flex justify-center items-center object-cover w-[3vw] sm:mr-[65vw] md:mr-[40  dvw]">
    //         <img src={main_logo} alt="" />
    //       </div>
    //     </div>
    //     <div className="flex items-center sm:text-2xl">
    //       {/* Navigation */}
    //       <div className="flex justify-between">
    //         <div className="sm:mx-4">Home</div>
    //         <div className="sm:mx-4">About</div>
    //         <div className="sm:mx-4">Blogs</div>
    //         <div className="sm:mx-4">Contact</div>
    //         <FontAwesomeIcon icon={faHouse} />
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div className="overflow-hidden">
      <nav
        id="navbar"
        className="hidden text-white  absolute  h-0 z-[88] md:flex items-center justify-between w-full overflow-hidden md:px-4"
      >
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex justify-center items-center object-cover w-[4vw]  sm:mr-6 md:mr-16 cursor-pointer">
            <img src={main_logo} alt="" className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center md:text-2xl">
          {/* Navigation */}
          <div className="flex justify-between">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                className="sm:mx-4 cursor-pointer block z-2"
                to={item.path}
              >
                {item.name}{" "}
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
    </div>
  );
};

export default Navbar;
// const content = (
//     <>
//        <div className="header">
//           <div className="header__image" onClick={goToHome}>
//              <img src={require("../assets/main_logo.png")} alt="logo" />
//           </div>
//           <nav>
//              {menuItems.map((item) => (
//                 <div className="nav__items__container" key={item.name}>
//                    <Link className="nav__items" to={item.path}>
//                       {item.name}
//                    </Link>
//                 </div>
//              ))}
//              <div>
//                 <FontAwesomeIcon
//                    className="nav__admin__button"
//                    icon={faHouse}
//                    onClick={goToAdmin}
//                    style={{ color: "#ffffff" }}
//                 />
//                 {!isSideBarOpen && (
//                    <FontAwesomeIcon
//                       className="nav__dropdown__button"
//                       icon={faBars}
//                       size="2xl"
//                       onClick={onDropDownButtonClicked}
//                    />
//                 )}
//                 {isSideBarOpen && (
//                    <FontAwesomeIcon
//                       icon={faClose}
//                       size="2xl"
//                       onClick={onDropDownButtonClicked}
//                    />
//                 )}
//              </div>
//           </nav>
//        </div>
//        {isSideBarOpen && (
//           <div className="nav__dropdown">
//              {menuItems.map((item) => (
//                 <div className="nav__dropdown__item" key={item.name}>
//                    <Link
//                       className="nav__items"
//                       to={item.path}
//                       onClick={onDropDownButtonClicked}
//                    >
//                       {item.name}
//                    </Link>
//                 </div>
//              ))}
//              {/* <div
//                 className="nav__dropdown__item nav__items"
//                 onClick={}
//              >
//                 <Link className="nav__items" to={"Admin"}>
//                    Admin
//                 </Link>
//              </div> */}
//           </div>
//        )}
//     </>
