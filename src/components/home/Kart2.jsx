import React from "react";
import Btn from "./Btn";

function Kart2({ name }) {
  return (
    <div className="bg-kart2  bg-cover bg-center bg-no-repeat w-1/1 rounded-lg xs:w-full xs:h-[244px] ">
      <div className="w-full h-3/4 flex justify-between flex-column py-3 px-4">
        <span className="text-white text-lg w-[40%] font-roboto font-normal xs:text-3xl xs:w-[55%]">
          Hackhathlon Burger Menü
        </span>
        <Btn name={name}></Btn>
      </div>
    </div>
  );
}

export default Kart2;
