import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Radio.css";

const RadioDrop = () => {

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDough, setSelectedDough] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  }

  const handleDoughChange = (event) => {
    setSelectedDough(event.target.value);
  }
  if (selectedSize !== "") {
    console.log("Seçilen boyut: ", selectedSize);
   
  }
  if (selectedDough !== "") {
  
  console.log("Seçilen hamur: ", selectedDough);
  }
  return (
    <div className="radio">
      <form>
        <p>Boyut Seç *</p>

        <input type="radio" id="meds" name="size" value="Küçük" checked={selectedSize === "Küçük"} onChange={handleSizeChange} />
        <label htmlFor="meds">Küçük</label><br />

        <input type="radio" id="med" name="size" value="Orta" checked={selectedSize === "Orta"} onChange={handleSizeChange} />
        <label htmlFor="med">Orta</label><br />

        <input type="radio" id="large" name="size" value="Büyük" checked={selectedSize === "Büyük"} onChange={handleSizeChange} />
        <label htmlFor="large">Büyük</label><br />
      </form>

      <form>
        <label htmlFor="dough">Hamur Seçiniz *</label><br />
        <select id="dough" value={selectedDough} onChange={handleDoughChange}>
          <option value="">Seçiniz</option>
          <option value="Kalın">Kalın Hamur</option>
          <option value="İnce">İnce Hamur</option>
          <option value="Çok İnce">Çok İnce Hamur</option>
        </select>
      </form>

    </div>
  );
};

export default RadioDrop;

