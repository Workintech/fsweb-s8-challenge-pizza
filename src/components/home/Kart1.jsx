import React, { useState } from "react";
import Btn from "./Btn";

function Kart1({ name }) {
  return (
    <div className="bg-kart1  bg-cover bg-center bg-no-repeat w-1/2 rounded-lg xs:w-full">
      <div className="w-full  flex flex-column py-10 px-4 gap-y-1">
        <span className="text-white text-4xl w-[20%] font-quatro font-semibold xs:text-5xl">
          Özel Lezzetus
        </span>
        <span className="text-white text-sm font-roboto xs:text-lg">
          Position:Absolute Acı Burger
        </span>

        <Btn name={name}></Btn>
      </div>
    </div>
  );
}

export default Kart1;
