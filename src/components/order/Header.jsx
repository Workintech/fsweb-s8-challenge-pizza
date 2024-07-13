import nameLogo from "../../../public/assets/home/logo.svg";

function Header() {
  return (
    <div className="w-full p-2 bg-[#bc2525] flex flex-col justify-center items-center gap-y-2 xs-w-full">
      <img className="w-[250px] p-2" src={nameLogo} alt="#" />
      <div className=" w-[30%] flex justify-start items-center xs:w-[50%]">
        <p className="text-gri mx-2 font-roboto text-xs">Anasayfa</p>
        <span>-</span>
        <p className=" text-white mx-2 font-roboto text-xs">Sipariş Oluştur</p>
      </div>
    </div>
  );
}

export default Header;
