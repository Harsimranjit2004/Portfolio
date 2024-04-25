import React from "react";

const Navbar = () => {
  return (
    <div className="overflow-hidden">
      <nav
        id="navbar"
        className="text-white absolute z-[2] flex items-center justify-between  w-full  h-0 overflow-hidden"
      >
        <div className="flex justify-center items-center">
          <img src="../assets/main_logo.png" alt="" />
        </div>
        <div></div>
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
