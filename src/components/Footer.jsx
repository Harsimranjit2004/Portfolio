import logo from "../assets/main_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faKaggle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import { menuItems } from "../config/menuItems";
import { useSelector } from "react-redux";
import {
  selectAllUserInfos,
  useGetUserInfoQuery,
} from "../features/userInfoApiSlice";
import Spinner from "../Utils/Spinner";

const footLinks = [
  {
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
  },
  {
    title: "Stack Overflow",
    url: "https://stackoverflow.com/",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
  },
  {
    title: "GitHub",
    url: "https://github.com/",
  },
  {
    title: "Kaggle",
    url: "https://www.kaggle.com/",
  },
];

const Footer = () => {
  const { data, isSuccess } = useGetUserInfoQuery();
  const allUserInfo = useSelector(selectAllUserInfos);
  let content = <Spinner />;
  if (isSuccess) {
    content = (
      <div className="footerContainer bg-zinc-900 border-t  border-gray-700">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-items-center justify-center py-5 px-5 align-items-center gap-5">
          <div className="flex flex-col">
            <div className=" ">
              <img
                src={logo}
                alt=""
                className=" sm:w-[11vmax] w-[20vh] object-cover"
              />
            </div>

            <div className="socailMedaiContainer flex align-center justify-center gap-5 ">
              <a href={allUserInfo?.[0].linkedin} target="_blank">
                <div className="socialMedia pointer">
                  <FontAwesomeIcon
                    className=""
                    color="white"
                    size="2xl"
                    icon={faLinkedin}
                  />
                </div>
              </a>
              <a href={allUserInfo?.[0].github} target="_blank">
                <div className="socialMedia pointer">
                  <FontAwesomeIcon size="2xl" color="white" icon={faGithub} />
                </div>
              </a>
              <a href={allUserInfo?.[0].kaggle} target="_blank">
                <div className="socialMedia pointer">
                  <FontAwesomeIcon size="2xl" color="white" icon={faKaggle} />
                </div>
              </a>
              <a href={allUserInfo?.[0].twitter} target="_blank">
                <div className="socialMedia pointer">
                  <FontAwesomeIcon size="2xl" color="white" icon={faTwitter} />
                </div>
              </a>
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-white align-center justify-center ">
            <div>
              <h2 className="text-4xl mb-4 text-green-500">Menu</h2>
            </div>
            <div className="text-xl ">
              {menuItems.map((item) => (
                <div className="" key={item.name}>
                  <Link className="footer__navitems" to={item.path}>
                    {item.name}
                  </Link>
                  {/* <a href={item.path}>{item.name}</a>  */}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col text-white align-center justify-center">
            <div className="">
              <h2 className="text-4xl mb-4 text-green-500">Links</h2>
            </div>
            <div className="text-xl flex flex-col justify-center align-center">
              {footLinks.map((item, index) => (
                <div key={item.title}>
                  <a href={item.url} className="">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-white align-center justify-center">
            <div className="">
              <h2 className="text-4xl mb-4 text-green-500">
                Contact Information
              </h2>
            </div>
            <div className="footer__info">
              <div className="text-xl mb-2">
                <h3>Email: {allUserInfo?.[0].email}</h3>
              </div>
              <div className="text-xl">
                <h3>Phone: {allUserInfo?.[0].phone}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 text-white flex align-center justify-center py-5">
          © harsimranjit singh
        </div>
      </div>
    );
  }

  return content;
};

export default Footer;
