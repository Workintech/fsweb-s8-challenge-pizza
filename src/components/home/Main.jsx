import React, { useState } from "react";
import Navbar from "./Navbar";
import Kart1 from "./Kart1";
import Kart2 from "./Kart2";
import Kart3 from "./Kart3";

import food1 from "../../../public/assets/pictures/food-1.png";
import food2 from "../../../public/assets/pictures/food-2.png";
import food3 from "../../../public/assets/pictures/food-3.png";

import kore from "../../../public/assets/icons/1.svg";
import pizza from "../../../public/assets/icons/2.svg";
import burger from "../../../public/assets/icons/3.svg";
import kizartmalar from "../../../public/assets/icons/4.svg";
import fastFood from "../../../public/assets/icons/5.svg";
import gazliIcecek from "../../../public/assets/icons/6.svg";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const items = [
  {
    name: "Ramen",
    logo: kore,
  },
  {
    name: "Pizza",
    logo: pizza,
  },
  { name: "Burger", logo: burger },
  {
    name: "French Fries",
    logo: kizartmalar,
  },
  {
    name: "Fast Food",
    logo: fastFood,
  },
  {
    name: "Soft Drinks",
    logo: gazliIcecek,
  },
];

function Main() {
  const [btnName, setBtnName] = useState("SİPARİŞ VER");
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main className=" w-screen  flex flex-col justify-center items-center bg-bej">
      {/* Main Images */}
      <div className=" h-full my-5 w-2/4 flex gap-x-2 xs:flex-col xs:w-[90%] xs:gap-y-2">
        <Kart1 name={btnName}></Kart1>
        <div className="flex flex-column w-1/2 h-full gap-y-2 xs:w-full xs:h-full">
          <Kart2 name={btnName}></Kart2>
          <Kart3 name={btnName}></Kart3>
        </div>
      </div>
      {/* Main Images */}

      {/* Medium Navbar */}
      <div className="w-[90%]  flex flex-col gap-y-2 justify-center items-center">
        <p className="text-rose-600 font-satisfy xs:text-xl">
          en çok paketlenen menüler
        </p>
        <p className="text-2xl font-roboto font-medium xs:w-[55%] text-center">
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
        <nav className="w-screen  flex justify-center">
          <div className="w-3/4 text-xs font-roboto py-2 flex justify-center items-center gap-x-7  flex-wrap xs:justify-between xs:gap-y-3">
            {menuItems.map((item, index) =>
              index == 1 ? (
                <a
                  href=""
                  className="w-[95px] rounded-full px-3 py-2 bg-black text-white flex justify-center items-center gap-x-2 xs:justify-start xs:py-4 xs:w-[100px]"
                >
                  <img className="w-6 xs:w-9" src={item.logo} alt="#" />
                  <span>{item.name}</span>
                </a>
              ) : (
                <Navbar key={index} name={item.name} logo={item.logo}></Navbar>
              )
            )}
          </div>
        </nav>
      </div>
      {/* Medium Navbar */}

      {/* three Reacsrtrap Cars */}
      <section className="w-3/4 my-4 flex justify-center items-center gap-x-3 xs:flex-col xs:gap-y-3 xs:w-[90%] ">
        <Card
          className="flex justify-center w-[20%] items-center border-none shadow-md py-2 xs:w-full"
          outline
        >
          <img className="w-40 " alt="Sample" src={food1} />
          <CardBody className="w-full self-start py-1">
            <CardTitle className="self-start text-sm font-roboto font-medium">
              Terminal Pizza
            </CardTitle>
            <div className="w-full flex justify-between ">
              <div className="text-softGri text-xs">4.9</div>
              <div className="text-softGri text-xs">(200)</div>
              <div className="text-xs">
                <b>60₺</b>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          className="flex w-[20%] justify-center items-center border-none shadow-md py-2 xs:w-full"
          outline
        >
          <img className="w-40 " alt="Sample" src={food2} />
          <CardBody className="w-full self-start py-1">
            <CardTitle className="self-start text-sm font-roboto font-medium">
              Position Absolute Acılı Pizza
            </CardTitle>
            <div className="w-full flex justify-between ">
              <div className="text-softGri text-xs">4.9</div>
              <div className="text-softGri text-xs">(200)</div>
              <div className="text-xs">
                <b>60₺</b>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          className="flex w-[20%] justify-center items-center border-none shadow-md py-2 xs:w-full"
          outline
        >
          <img className="w-40 " alt="Sample" src={food3} />
          <CardBody className="w-full self-start py-1">
            <CardTitle className="self-start text-sm font-roboto font-medium">
              useEffect Tavuklu Burger
            </CardTitle>
            <div className="w-full flex justify-between ">
              <div className="text-softGri text-xs">4.9</div>
              <div className="text-softGri text-xs">(200)</div>
              <div className="text-xs">
                <b>60₺</b>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
      {/* three Reacsrtrap Cars */}
    </main>
  );
}

export default Main;
