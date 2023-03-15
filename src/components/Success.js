import React from "react";
import logo from "../logo.svg";
export default function Success() {
  return (
    <div className="bg-red w-screen h-screen">
      <div className="bg-red grid place-items-center ">
        <img src={logo} alt="teknolojik yemekler" className="py-16" />
        <p className="  text-6xl text-white text-center font-Barlow mt-64">
          TEBRIKLER! <br /> PIZZA'NIZ HAZIRLANIYOR!
        </p>
      </div>
    </div>
  );
} 
