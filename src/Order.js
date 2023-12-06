import React from "react";
import "./Order.css";
import RadioDrop from "./RadioDrop";
import Check from "./Check"

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
const Order = () => {
  return (
    <div id="pizza-form" className="order">
      <>
        <div className="TopFood">
          <h1>Teknolojik Yemekler </h1>
          <div className="navbar">
          </div>
        </div>
        <div className="MiddleFood">
          <h2>
            {" "}
            <strong> Positon Absolute Acılı Pizza </strong>{" "}
          </h2>
          <h2>
            {" "}
            <strong> 85.50 TL </strong>{" "}
          </h2>
          <p>
            {" "}
            Fronted dev olarak hala positon absolute kullanıyorsan bu pizza tam
            sana göre. <br></br> Pizza domates,peynir ve çeşitli diğer
            malzemelerle kaplanmış, daha <br></br> sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, <br></br>{" "}
            genellikle yuvarlak düzleştirilmiş mayalı buğday bazlı hamurdan
            oluşan italyan <br></br>köken lezzetli bir yemektir.küçük pizzaya
            pizzeta denir.{" "}
          </p>
          <div className="radio">
            <RadioDrop></RadioDrop>
          </div>
          <div className="Check">
            <Check></Check>
          </div>
        </div>
      </>
      <div className="comcontainer">
        <div className="comminication">
          <h2>Teknolojik Yemekler </h2>
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/icon-1.png`}
          />
          <p>
            {" "}
            341 londarary road, <br></br> İstanbul/Türkiye{" "}
          </p>
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/icon-2.png`}
          />
          <p>acıktım@teknolojikyemekler.com </p>
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/icon-3.png`}
          />
          <p>+90 216 784 25 36</p>
        </div>
        <div className="menuıtem">
          <h2>Sıcacık Menüler</h2>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Pizza</p>
          <p>Absolute Pizza</p>
          <p> Hungry Burger </p>
          <p>Tavuklu Burger </p>
          <p> Patatas Kızartması</p>
        </div>
        <div className="insta">
          <h2>İnstagram</h2>
          <div className="instatop">
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-0.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-1.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-2.png`}
            />
          </div>
          <div className="instabot">
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-3.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-4.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-5.png`}
            />
          </div>
        </div>
      </div>
      <div className="footersbot">
        <p> @Teknolojik Yemekler 2023</p>
        <div className="social">
          <FaTwitter />
          <FaFacebook></FaFacebook>
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};
export default Order;
