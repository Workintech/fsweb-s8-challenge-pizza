import logo from "../../../public/assets/home/logo.svg";
import Footer from "../home/Footer";
import TotalPriceCard from "../order/TotalPriceCard";

function Success({ totalPrice, order }) {
  return (
    <div>
      <div className="p-4 w-screen bg-rose-800 flex flex-col justify-center items-center gap-y-4 ">
        <img className="w-[250px] p-2 mb-4" src={logo} alt="" />
        <div className="w-[30%] p-6  flex flex-col justify-center items-center gap-y-2  border-b xs:w-full xs:text-center">
          <span className="text-yellow font-satisfy">lezzetin yolda</span>
          <span className="text-5xl text-white font-barlow font-light xs:text-3xl">
            SİPARİŞ ALINDI
          </span>
        </div>
        <div className=" w-[30%] flex flex-col justify-center items-center xs:w-full">
          <div className=" w-[70%] flex flex-col justify-start items-start gap-y-4  ">
            <h1 className="text-white self-start">
              Position Absolute Acılı Pizza
            </h1>
            <div className="flex flex-col justify-start gap-y-2 text-sm xs:w-full">
              <p className="text-white font-barlow font-thin">
                Boyut: <span className="font-medium">{order.size}</span>
              </p>
              <p className="text-white font-barlow font-thin">
                Hamur: <span className="font-medium">{order.thin}</span>
              </p>
              <p className="text-white font-barlow font-medium">
                <span className="font-thin">Ek Malzemeler:</span>
                {order.material.map((item, index) => (
                  <span key={index} className="inline-block">
                    {item}
                    {index < order.material.length - 1 && <span> , </span>}
                  </span>
                ))}
              </p>
              <p className="text-white font-barlow font-thin">
                Name: <span className="font-medium">{order.name}</span>
              </p>
              {order.notes && (
                <p className="text-white font-barlow font-thin">
                  Notes: <span className="font-medium">{order.notes}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[30%] rounded-lg mb-4 xs:w-full">
          <TotalPriceCard
            addPrice={totalPrice.addPrice}
            multiply={totalPrice.multiply}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
