function TotalPriceCard({ addPrice, multiply }) {
  return (
    <div className="bg-bej w-full p-4 flex flex-col items-center gap-y-2 ">
      <h1 className="w-full text-lg flex justify-start font-semibold xs:text-xl">
        <span>Sipariş Toplamı</span>
      </h1>
      <div className="w-full text-softGri font-semibold flex justify-between items-center xs:text-xl">
        <span>Seçimler</span>
        <span>{addPrice}₺</span>
      </div>
      <div className="w-full text-red font-semibold flex justify-between items-center xs:text-xl">
        <span>Toplam</span>
        <span>{(85.5 + addPrice) * multiply}₺</span>
      </div>
    </div>
  );
}

export default TotalPriceCard;
