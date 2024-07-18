import React from "react";
import Btn from "./Btn";
function Kart3({ name }) {
  return (
    <div className="bg-kart3  bg-cover bg-center bg-no-repeat w-1/1 rounded-lg xs:w-full xs:h-[244px]">
      <div className="w-full h-3/4 justify-between  flex flex-column py-3 px-4 ">
        <span className="text-black text-lg w-[40%] font-barlow font-semibold xs:text-2xl xs:w-[55%]">
          <span className="text-red ">Çooook</span> hızlı npm gibi kurye
        </span>
        <Btn name={name}></Btn>
      </div>
    </div>
  );
}

export default Kart3;
