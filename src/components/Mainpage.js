import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";


export default function Mainpage() {
  return (
    <div className=" bg-[url('../Assets/mvp-banner.png')] h-screen w-screen bg-cover bg-center ">
      <div className="grid place-items-center  place-content-center">
        <img src={logo} className="pt-24 pb-8"></img>
        <p className="text-[50px] text-center text-white font-extralight ">
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </p>
        <Link to="/Select">
          <button className="bg-yellow px-12 py-3 rounded-full font-bold my-6 hover:text-white hover:bg-amber-500 active:bg-lime-700 active:text-white hover:pos ">
            ACIKTIM
          </button>
        </Link>
      </div>
    </div>
  );
}
