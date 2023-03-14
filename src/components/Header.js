import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";

export default function Header() {
  return (
    <div>
      <div
        className="  grid
      place-items-center 
      w-screen 
       bg-red-600 
       "
      >
        <img className=" scale-75 mb-7 text-[1.5rem]" src={logo} alt="logo" />
        <div className="w-[50vw] mb-5">
          <nav className="text-stone-300 ">
            <Link to="/">Anasayfa</Link>
            <span> - </span>
            <Link>Seçenekler</Link>
            <span> - </span>
            <Link className="text-white ">Sipariş Oluştur</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
