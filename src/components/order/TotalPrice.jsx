import { useState } from "react";
import TotalPriceCard from "./TotalPriceCard";

function TotalPrice({ formValid, addPrice, multiply }) {
  return (
    <div>
      <TotalPriceCard multiply={multiply} addPrice={addPrice} />
    </div>
  );
}

export default TotalPrice;
