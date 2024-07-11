import React, { useState } from "react";
import Btn from "./Btn";
import logo from "../../../public/assets/home/logo.svg";
import kore from "../../../public/assets/icons/1.svg";
import pizza from "../../../public/assets/icons/2.svg";
import burger from "../../../public/assets/icons/3.svg";
import kizartmalar from "../../../public/assets/icons/4.svg";
import fastFood from "../../../public/assets/icons/5.svg";
import gazliIcecek from "../../../public/assets/icons/6.svg";
import Navbar from "./Navbar";

const items = [
  {
    name: "YENİ! Kore",
    logo: kore,
  },
  {
    name: "Pizza",
    logo: pizza,
  },
  { name: "Burger", logo: burger },
  {
    name: "Kızartmalar",
    logo: kizartmalar,
  },
  {
    name: "Fast Food",
    logo: fastFood,
  },
  {
    name: "Gazlı İçecek",
    logo: gazliIcecek,
  },
];

function Header() {
  const [btnName, setBtnName] = useState("ACIKTIM");

  const [menuItems, setMenuItems] = useState(items);

  return (
    <>
      <div className="bg-home-banner flex flex-row justify-center w-screen h-screen bg-cover bg-bottom bg-no-repeat  xs:bg-top">
        <div className="w-4/12 h-1/2 flex flex-column items-center justify-center py-10 px-3 gap-y-6 xs:w-[100%] xs:my-8">
          <img
            className="w-[16rem] xs:w-[18rem] xs:mt-[2.5rem] "
            src={logo}
            alt="#"
          />
          <div className="flex flex-column items-center justify-center  xs:gap-y-1">
            <p className="font-satisfy text-yellow xs:hidden">
              fırsatı kaçırma
            </p>
            <h1 className="text-white font-barlow font-light text-5xl w-[100%] text-center   drop-shadow-lg xs:text-5xl xs:font-light xs:w-[60%]">
              KOD ACIKTIRIR PIZZA, DOYURUR
            </h1>
            <Btn name={btnName} />
          </div>
        </div>
      </div>

      <nav className="w-screen flex justify-center">
        <div className="w-3/4 text-xs font-roboto py-3 flex justify-center items-center gap-x-7 flex-wrap xs:justify-between">
          {menuItems.map((item, index) => (
            <Navbar key={index} name={item.name} logo={item.logo}></Navbar>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Header;
