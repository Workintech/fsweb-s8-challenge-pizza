import TotalPriceCard from "./TotalPriceCard";

function TotalPrice() {
  return (
    <div>
      <TotalPriceCard />
      <button
        type="submit"
        className="w-full bg-yellow py-3 rounded-md text-lg font-medium"
      >
        SİPARİŞ VER
      </button>
    </div>
  );
}

export default TotalPrice;
