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
import icon1 from "../Assets/Assets/esnek/icon-1.png";
import icon2 from "../Assets/Assets/esnek/icon-2.png";
import icon3 from "../Assets/Assets/esnek/icon-3.png";
import food1 from "../Assets/Assets/esnek/food-1.png";
// import food2 from "../Assets/Assets/esnek/insta/food-2.png";
import food3 from "../Assets/Assets/esnek/food-3.png";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import css from  "../components/page.css";

export default function Mainpage() {
  return (
    <><div className=" bg-[url('../Assets/mvp-banner.png')] h-screen w-screen bg-cover bg-center ">
      <div className="grid place-items-center  place-content-center ">
        <img src={logo} className="pt-24 pb-8"></img>
        <p className="text-[50px] text-center text-white font-extralight ">
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </p>
        <Link to="/order-pizza">
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
          <Link to="/order-pizza" className="text-black pr-5   hover:text-red no-underline">
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
          </Link><body><div className="bg-white text-center grid place-items-center place-content-center pt-7">
        <div className="pb-10 mr-left">
            <div id="imgPlace">
              <img className="kart1" src={kart1}></img>
              <h1>Özel<br/>Lezzetus</h1>
              <p>Position:Absolute Acı Burger</p>
              <Link to="/order-pizza">
          <button className="bg-white px-12 py-3 rounded-full font-bold my-6 hover:text-white hover:bg-yellow hover:white active:bg-lime-700 active:text-white hover:pos ">
            SİPARİŞ VER
          </button>
        </Link>
              </div>
          <img className="kart2" src={kart2}></img>
          <img className="kart3" src={kart3}></img>

          </div>
          </div><div>
            <p id="metin">en çok paketlenen menüler</p>
            <h1 id="metin2">Acıktıran Kodlara Doyuran Lezzetler</h1>
          </div><Link to="/" className="text-black pr-15  hover:text-red no-underline">
          <button variant="outlined"><img className="inline pr-5" src={kore}></img>
          Ramen</button>
          </Link>
          <span className="text-white"> - </span>
          <Link to="/order-pizza" className="text-black pr-5  hover:text-red no-underline">
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
          French fries
          </Link>
          <span className="text-white"> - </span>
          <Link to="" className="text-black pr-5   hover:text-red no-underline">
          <img className="inline pr-5" src={fastfood}></img>
          Fast food
          </Link>
          <span className="text-white"> - </span>
          <Link to="" className="text-black pr-5  hover:text-red no-underline">
          <img className="inline pr-5" src={gazliicecek}></img>
          Soft drinks
          </Link></body>
          
<footer>
<div class="footer">
<div class="row">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><Link to="https://duckduckgo.com/?q=istanbul&atb=v367-7__&ia=web&iaxm=about" className="text-black pr-15  hover:text-red no-underline">
          <img className="inline pr-5" src={icon1}></img>
          341 Londonderry Road,<div>
            Istanbul Türkiye
          </div>
          </Link>
          <Link to="" className="text-black pr-15  hover:text-red no-underline">
          <img className="inline pr-5" src={icon2}></img>
          aciktim@teknolojikyemekler.com
          </Link>
          <Link to="" className="text-black pr-15  hover:text-red no-underline">
          <img className="inline pr-5" src={icon3}></img>
          +90 216 123 45 67
          </Link></li>
<li><a href="#">Sıccacık Menuler</a></li>
<li><a href="#">Instagram</a></li>

</ul>
</div>

<div class="row">
    © 2023 Teknolojik Yemekler
</div>
</div>
</footer>

        </div>
      </div></>
  );
};


