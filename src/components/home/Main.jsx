import React, { useState } from "react";
import Btn from "./Btn";
import Kart1 from "./Kart1";
import Kart2 from "./Kart2";
import Kart3 from "./Kart3";
function Main() {
  const [btnName, setBtnName] = useState("SİPARİŞ VER");

  return (
    <main className="h-[100vh] w-screen flex flex-column items-center bg-bej ">
      <div className="h-full w-[65%] flex justify-center items-center xs:w-[100%] xs:items-start  xs:py-12 xs:px-5">
        <div className=" h-3/5 w-3/4 flex gap-x-2 xs:flex-col xs:w-[90%] xs:gap-y-2">
          <Kart1 name={btnName}></Kart1>
          <div className="flex flex-column w-1/2 h-1/1 gap-y-2 xs:w-full xs:h-full">
            <Kart2 name={btnName}></Kart2>
            <Kart3 name={btnName}></Kart3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
