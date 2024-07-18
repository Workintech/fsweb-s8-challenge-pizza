import React from "react";

import location from "../../../public/assets/footer/icons/icon-1.png";
import posta from "../../../public/assets/footer/icons/icon-2.png";
import phone from "../../../public/assets/footer/icons/icon-3.png";

import li0 from "../../../public/assets/footer/insta/li-0.png";
import li1 from "../../../public/assets/footer/insta/li-1.png";
import li2 from "../../../public/assets/footer/insta/li-2.png";
import li3 from "../../../public/assets/footer/insta/li-3.png";
import li4 from "../../../public/assets/footer/insta/li-4.png";
import li5 from "../../../public/assets/footer/insta/li-5.png";

import twitter from "../../../public/assets/footer/logo-footer.svg";

function Footer() {
  return (
    <footer className="bg-gri w-screen flex flex-col justify-center items-center text-white ">
      <section className="w-3/4 flex justify-center items-center p-3 gap-x-4 xs:flex-col xs:items-start">
        <div className="flex flex-col p-3 gap-y-6">
          <img className="w-[110px]" src={twitter} alt="#" />
          <address className="flex flex-col justify-start text-xs gap-y-4">
            <div className="flex flex-row justify-start items-center gap-x-2">
              <img className="w-5" src={location} alt="3" />
              <p className="w-2/3">341 Londonderry Road, İstanbul Türkiye</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-2">
              <img className="w-5" src={posta} alt="3" />
              <p className="w-2/3">aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-2">
              <img className="w-5" src={phone} alt="3" />
              <p className="w-2/3">+90 216 123 45 67</p>
            </div>
          </address>
        </div>

        <div className="flex flex-col p-3 gap-y-5 mt-14">
          <h4>Hot Menu</h4>
          <div className="flex flex-col justify-start text-xs gap-y-2 ">
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Consol Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acılı Burger</p>
          </div>
        </div>

        <div className="flex flex-col p-3 gap-y-5 mt-14">
          <h4>Instagram</h4>
          <div className="flex flex-col justify-start text-xs gap-y-2 ">
            <div className="flex flex-row justify-center items-center gap-x-2">
              <img className="w-[65px] rounded-s-sm" src={li0} alt="#" />
              <img className="w-[65px] rounded-s-sm" src={li1} alt="#" />
              <img className="w-[65px] rounded-s-sm" src={li2} alt="#" />
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              <img className="w-[65px] rounded-s-sm" src={li3} alt="#" />
              <img className="w-[65px] rounded-s-sm" src={li4} alt="#" />
              <img className="w-[65px] rounded-s-sm" src={li5} alt="#" />
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full" style={{ color: "gray" }} />
      <div className="w-2/4 flex justify-between items-center p-3 xs:w-3/4 ">
        <span>
          <p className="text-xs">© 2023 Teknolojik Yemekler</p>
        </span>
        <span>
          <i class="fa-brands fa-twitter"></i>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
