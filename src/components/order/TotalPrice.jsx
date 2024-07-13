import { useState } from "react";
import TotalPriceCard from "./TotalPriceCard";

function TotalPrice({ formValid, addPrice, multiply }) {
  return (
    <div>
      <TotalPriceCard multiply={multiply} addPrice={addPrice} />
      <button
        disabled={!formValid}
        type="submit"
        className={`w-full ${
          formValid ? "bg-yellow" : "bg-gray-300"
        } py-3 rounded-md text-lg font-medium`}
      >
        SİPARİŞ VER
      </button>
    </div>
  );
}

export default TotalPrice;
