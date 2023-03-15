import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import img from "../Assets/Assets/food-2.png";

export default function Order() {
  
return (
    <div>
      <div className="bg-red text-center grid place-items-center place-content-center">
        <img src={logo} className="pt-10 pb-8  "></img>
        <div className="pb-6 mr-center text-[20px]">
          <Link to="/" className="text-white hover:text-black no-underline">
            Anasayfa
          </Link>
          <span className="text-white"> - </span>
          <Link to="/Options" className="text-white  hover:text-black no-underline">
            Seçenekler
          </Link>
          <span className="text-white"> - </span>
          <Link to="/Select" className="text-white  hover:text-black no-underline">
            Sipariş Oluştur
          </Link>

        </div>
      </div>
      <div className="w-1/3 m-auto">
        <h1 className="font-bold font-sans text-[30px] text-center pt-10 text-zinc-700">
          Position Absolute
          <div>Acı Pizza
            <img src={img} className="pt-8 pb-5 pl-8"></img>
          </div>
        </h1>
        <div className="flex items-center justify-between py-10">
          <p className="font-bold text-[30px]">85.50 ₺</p>
          <p className="ml-44 text-[19px] font-bold text-zinc-600">4.9</p>
          <p className="text-[19px] text-zinc-400 font-bold">(200)</p>

        </div>
        <h2 className="text-zinc-400 font-Barlow text-[15px] font-bold">
          Merhaba yazılımcı dostlarımız,

          Size özel hazırladığımız Acı Pizza'mızı denediniz mi? İsminden de anlaşılacağı gibi, bu pizza acı sevenler için tasarlandı! Yoğun baharatlı sosumuz, ince hamurumuz ve enfes malzemelerimiz ile her ısırıkta lezzeti hissedeceksiniz.

          Ama bununla da bitmiyor, Acı Pizza'yı yazılımcıların favori yemeği haline getirecek bir özelliğimiz daha var: Position Absolute. Evet, yanlış duymadınız! Acı Pizza'mızın tam ortasında konumlanan acı biberlerimiz, yazılımcıların en sevdiği CSS özelliği Position Absolute'yi çağrıştırıyor. Sadece bir ısırık alıp, acının doruklarına çıktığınızda hissedeceksiniz.

          Ayrıca, Acı Pizza'mızın sipariş süreci de size özel olarak tasarlandı. Basit ve kullanımı kolay arayüzümüz sayesinde, siparişinizi birkaç tıklama ile tamamlayabilirsiniz.

          Yani, hemen Acı Pizza'mızı deneyin ve Position Absolute'nin lezzetli bir şekilde hayatınıza yansımasını sağlayın!

        </h2>

        
            </div>
          
          <div>
            <form>
              <label htmlFor="user-mail">Email</label>
              <input 
              id="name-input" 
              type="text"  />
              <br/>
              <label htmlFor="user-pass">Password</label>
              <input type="password" />
              <br/>
              <label htmlFor="checked">Siparişim kapıma bırakılsın.</label>
              <input id="checked" type="checkbox"></input>
              <br/>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="mt-20 ">
            <h2 className="font-bold text-[20px]">Sipariş Notu</h2>
            <input
              placeholder="Siparişinize eklemek istediğiniz not var mı ?"
              className="border-solid border-2 border-zinc-200 w-full h-16 p-5 rounded-md mt-4"
            />
          </div>


          <hr className="my-10 border-zinc-500" />
          <div className="flex justify-between">
            <div className="flex justify-start">
              <button className="w-12 h-12 border rounded-md bg-yellow hover:bg-amber-200">
                -
              </button>
              <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                1
              </div>
              <button className="w-12 h-12 border rounded-md bg-yellow hover:bg-amber-200">
                +
              </button>
            </div>
            
              <div>
              <Link to="/Success">
          <button className="bg-yellow px-12 py-3 rounded-full font-bold my-6 hover:text-white hover:bg-amber-500 active:bg-lime-700 active:text-white hover:pos ">
            Sipariş Ver
          </button>
        </Link>
              </div>
            </div>
        
      </div>
    
  );
}
