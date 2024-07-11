function Main() {
  return (
    <div className="bg-bej flex flex-col  justify-center items-center w-screen">
      <div className="bg-pizza h-[130px] w-[30%]  bg-cover bg-bottom xs:bg-none xs:h-0"></div>

      <div className="w-[30%] flex flex-col  justify-start mt-5 gap-y-5 font-roboto xs:w-[80%] xs:mt-3">
        <p className="text-sm font-bold">Position Absolute Acılı Pizza</p>
        <div className="w-full flex justify-between items-center">
          <span className="font-bold">85.50₺</span>
          <div className="w-[30%] flex justify-between text-xs text-softGri">
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>
        <div className="w-full text-softGri text-justify text-xs">
          <p className="leading-loose">
            {" "}
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
