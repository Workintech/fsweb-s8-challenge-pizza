import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import kore from "../Assets/Assets/esnek/mini-buttons/1.png.svg";
import pizza from "../Assets/Assets/esnek/mini-buttons/2.png.svg";
import burger from "../Assets/Assets/esnek/mini-buttons/3.png.svg";
import kizartmalar from "../Assets/Assets/esnek/mini-buttons/4.png.svg";
import fastfood from "../Assets/Assets/esnek/mini-buttons/5.png.svg";
import gazliicecek from "../Assets/Assets/esnek/mini-buttons/6.png.svg";
import kart1 from "../Assets/Assets/esnek/kart-1.png";
import kart2 from "../Assets/Assets/esnek/kart-2.png";
import kart3 from "../Assets/Assets/esnek/kart-3.png";
import css from "../components/page.css";


export default function Mainpage() {
  return (
    <><div className=" bg-[url('../Assets/mvp-banner.png')] h-screen w-screen bg-cover bg-center ">
      <div className="grid place-items-center  place-content-center ">
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
    </div><div className="bg-white text-center grid place-items-center place-content-center pt-9">
        <div className="pb-10 mr-center text-[20px]">
          <Link to="/" className="text-black pr-15  hover:text-red no-underline">
          <img className="inline pr-5" src={kore}></img>
          YENİ! Kore
          </Link>
          <span className="text-white"> - </span>
          <Link to="" className="text-black pr-5   hover:text-red no-underline">
          <img className="inline pr-5" src={pizza}></img>
          Pizza
          </Link>
          <span className="text-white"> - </span>
          <Link to="/Select" className="text-black pr-5  hover:text-red no-underline">
          <img className="inline pr-5" src={burger}></img>
          Burger
          </Link>
          <span className="text-white"> - </span>
          <Link to="" className="text-black pr-5   hover:text-red no-underline">
          <img className="inline pr-5" src={kizartmalar}></img>
          Kızartmalar
          </Link>
          <span className="text-white"> - </span>
          <Link to="" className="text-black pr-5   hover:text-red no-underline">
          <img className="inline pr-5" src={fastfood}></img>
          Fast Food
          </Link>
          <span className="text-white"> - </span>
          <Link to="" className="text-black pr-5  hover:text-red no-underline">
          <img className="inline pr-5" src={gazliicecek}></img>
          Gazlı İçecekler
          </Link><div className="bg-white text-center grid place-items-center place-content-center pt-7">
        <div className="pb-10 mr-left">
          <img className="kart1" src={kart1}></img>
          <img className="kart2" src={kart2}></img>
          <img className="kart3" src={kart3}></img>

          </div>
          </div>

        </div>
      </div></>
  );
};


