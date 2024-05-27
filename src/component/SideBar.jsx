import React from "react";
import { Link } from "react-router-dom";

// icon
import { FaHome } from "react-icons/fa";
import { PiDevicesLight } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";

const dataNav = [
  { id: 1, link: "/home", icon: <FaHome />, text: "Home" },
  { id: 2, link: "/device", icon: <PiDevicesLight />, text: "Device" },
  { id: 3, link: "/about", icon: <IoPeople />, text: "About" },
  { id: 4, link: "/", icon: <FaPowerOff />, text: "Logout" },
];

const SideBar = () => {
  return (
    <div className="fixed  left-0 top-0 md:bottom-0 w-full md:w-28 bg-primary-0 flex md:flex-col items-center justify-evenly md:justify-start  md:p-5 p-2 md gap-5 z-50">
      {dataNav.map((item) => (
        <Link to={item.link} className="flex flex-col items-center justify-center hover:scale-105" key={item.id}>
            <div className="text-secondary-0 md:text-4xl text-2xl">{item.icon}</div>
            <h1 className="font-semibold text-sm">{item.text}</h1>
        </Link>
      ))}

    </div>
  );
};

export default SideBar;
