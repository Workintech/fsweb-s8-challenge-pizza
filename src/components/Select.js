import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import img from "../Assets/Assets/esnek/esnek-form-banner.png";
import * as Yup from "yup";
import axios from "axios";
// import {
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Button,
//   FormFeedback,
// } from "reactstrap";

export default function Order() {
  const checkData = [
    { id: "1", value: "Papperroni", status: true },
    { id: "2", value: "Domates", status: false },
    { id: "3", value: "Biber", status: false },
    { id: "4", value: "Sosis", status: true },
    { id: "5", value: "Mısır", status: true },
    { id: "6", value: "Sucuk", status: false },
    { id: "7", value: "Kanada Jambonu", status: false },
    { id: "8", value: "Pastırma", status: false },
    { id: "9", value: "Ananas", status: true },
    { id: "10", value: "Tavuk Izgara", status: false },
    { id: "11", value: "Jalepeno", status: true },
    { id: "12", value: "Kabak", status: true },
    { id: "13", value: "Soğan", status: false },
    { id: "14", value: "Sarımsak", status: false },
  ];
  const Form = () => {
    
    
  };
    const formSubmit = (e) => {
      e.preventDefault();
      // axios.post("url", user).then(res => Navigate("/Success"));
    };
  const checkChange = (e) => {
    console.log(e.target);

  }

  const textChange = (e) => {
    console.log("input > ", e.target.value);
  };
  
  const nameChange = (e) => {
    console.log("name = ", e.target.value);
  };

  const emailChange = (e) => {
    console.log("email = ", e.target.value);
  };
  
  const adressChange = (e) => {
    console.log("adress = ", e.target.value);
  };

  const phoneChange = (e) => {
    console.log("phone = ", e.target.value);
  };
  
  const mailChangeHandler = () => {
console.log()

// useEffect(()=> {
//   console.log("user = ", user);
// }, [user]);
 
  };
  return (
    <div>
      <div className="bg-red text-center grid place-items-center place-content-center">
        <img src={logo} className="pt-10 pb-8 "></img> 
      </div>
            <img src={img} className="position"></img>
            <div className="links">
          <Link to="/" className="text-black hover:text-red no-underline">
            Anasayfa
          </Link>
          <span className="text-black"> - </span>
          <Link to="" className="text-black  hover:text-red no-underline">
            Seçenekler
          </Link>
          <span className="text-black"> - </span>
          <Link to="/Select" className="text-black  hover:text-red no-underline">
            Sipariş Oluştur
          </Link>
          </div>
            <div className="w-1/3 m-auto">
        <h1 className="font-bold font-sans text-[25px] text-left pt-10 text-zinc-700">
          Position Absolute Acı Pizza
            

       
      
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

        <form onSubmit={formSubmit}>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-[18px] mt-10 mb-4">
                Boyut Seç <span className="text-red">*</span>
              </h3>
              <div className="flex items-center text-zinc-500 font-mono">
                <input type="radio" name="boyut" id="kucuk" />
                <label htmlFor="kucuk" className="ml-3">
                  Küçük
                </label>
              </div>
              <div className="flex items-center my-4 text-zinc-500 font-mono">
                <input type="radio" name="boyut" id="orta" />
                <label htmlFor="orta" className="ml-3">
                  Orta
                </label>
              </div>
              <div className="flex items-center text-zinc-500 font-mono">
                <input type="radio" name="boyut" id="buyuk" />
                <label htmlFor="buyuk" className="ml-3">
                  Büyük
                </label>
              </div>
            </div>
            <div className="mr-32">
              <h3 className="font-bold text-[18px] mt-10 mb-4"
              >
                Hamur Seç <span className="text-red">*</span>
              </h3>
              <div>
                <select className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option disabled>Hamur Kalınlığı</option>
                  <option value="1">Standart</option>
                  <option value="2">Kalın</option>
                  <option value="3">İnce</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="font-bold text-[20px] my-4">Ek Malzemeler</h2>
            <h3 className="text-zinc-500">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </h3>
            <div className="grid grid-cols-3  mb-20 mt-4">
              {checkData.map((item) => (
                <div
                  key={item.id}
                  className="mt-4 font-bold text-zinc-500 hover:text-zinc-800"
                >
                  <input id={item.id} type="checkbox" onChange={checkChange} value={item.value} />
                  <label htmlFor={item.id} className="ml-4">
                    {item.value}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 ">
            <label htmlFor="name-input"><h2 className="font-bold text-[20px]">Adınız Soyadınız :</h2></label>
            <input
            id="name-input"
            type="text"
              placeholder=""
              className="border-solid border-2 border-zinc-200 w-full h-16 p-5 rounded-md mt-4"
              onChange={nameChange}
            />
          </div>
          <div className="mt-20 ">
            <label htmlFor="adress-input"><h2 className="font-bold text-[20px]">Adres :</h2></label>
            <input
            id="adress-input"
              placeholder=""
              className="border-solid border-2 border-zinc-200 w-full h-16 p-5 rounded-md mt-4"
              onChange={adressChange}
            />
          </div>
          <div className="mt-20 ">
            <label htmlFor="email-input"><h2 className="font-bold text-[20px]">Email Adresiniz :</h2></label>
            <input
            id="email-input"
            name="u-mail"
            type="email"
              placeholder="abc@abc.com"
              className="border-solid border-2 border-zinc-200 w-full h-16 p-5 rounded-md mt-4"
              onChange={emailChange}
            />
          </div>
          <div className="mt-20 ">
            <label htmlFor="phone-input"><h2 className="font-bold text-[20px]">Telefon Numaranız :</h2></label>
            <input
            id="phone-input"
            type="number"
              placeholder="+90"
              className="border-solid border-2 border-zinc-200 w-full h-16 p-5 rounded-md mt-4"
              onChange={phoneChange}
            />
          </div>
          
        
          <div className="mt-20 ">
            <label htmlFor="order-input"><h2 className="font-bold text-[20px]">Sipariş Notu :</h2></label>
            <input
            id="order-input"
              placeholder="Siparişinize eklemek istediğiniz not var mı ?"
              className="border-solid border-2 border-zinc-200 w-full h-16 p-5 rounded-md mt-4"
              onChange={textChange}
            />
          </div>


          <hr className="my-10 border-zinc-500" />
          <div className="flex justify-between">
            <div className="flex justify-start">
              <button className="w-12 h-12 border rounded-md bg-white hover:bg-yellow">
                -
              </button>
              <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                1
              </div>
              <button className="w-12 h-12 border rounded-md bg-white hover:bg-yellow">
                +
              </button>
            </div>
            <div className="mb-32">
              <div className="border p-8 rounded-sm border-zinc-300 ">
                <div className="text-lg font-bold font-Barlow mb-4 mr-32 ">
                  Sipariş Toplamı
                </div>
                <div className="flex justify-between font-Barlow ">
                  <div>Seçimler</div>
                  <div>25.00₺</div>
                </div>
                <div className="flex justify-between font-Barlow font-bold text-red">
                  <div>Toplam</div>
                  <div>110.50₺</div>
                </div>
              </div>
              <div>
                <Link to="/Success">
                  <button
                  type="submit" 
                  className="w-80 h-12 bg-yellow hover:border-y-4 hover:border-zinc-500  rounded-sm">
                    Sipariş Ver
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
