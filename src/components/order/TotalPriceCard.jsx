function TotalPriceCard() {
  return (
    <div className="w-full p-4 flex flex-col items-center gap-y-2 ">
      <h1 className="w-full text-lg flex justify-start font-semibold">
        <span>Sipariş Toplamı</span>
      </h1>
      <div className="w-full text-softGri font-semibold flex justify-between items-center ">
        <span>Seçimler</span>
        <span>30₺</span>
      </div>
      <div className="w-full text-red font-semibold flex justify-between items-center ">
        <span>Toplam</span>
        <span>110₺</span>
      </div>
    </div>
  );
}

export default TotalPriceCard;
