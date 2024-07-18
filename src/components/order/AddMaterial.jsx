import { useEffect, useState } from "react";
import TotalPrice from "./TotalPrice";

const initialState = {
  size: "",
  thin: "",
  name: "",
  notes: "",
};

function AddMaterial({ validate, price, size, bread, finalOrder }) {
  const [materials, setMaterials] = useState([]);
  const [addPrice, setAddPrice] = useState(0);
  const [nameAndNotes, setNameAndNotes] = useState(initialState);
  const [materialValid, setMaterialValid] = useState(null);
  const [bigTenMaterial, setBigTenMaterial] = useState(null);
  const [validInput, setValidInput] = useState(true);
  const [multiply, setMultiply] = useState(1);
  const [formValid, setFormValid] = useState(null);

  const changeHandler = (e) => {
    const { id, type, value, name, checked } = e.target;

    if (id === "text" || id === "notes") {
      setNameAndNotes({ ...nameAndNotes, [name]: value });
      if (id === "text" && value.length >= 3) {
        setValidInput(true);
      } else if (id !== "notes") {
        setValidInput(false);
      }
    } else if (type === "checkbox" && checked) {
      setAddPrice(addPrice + 5);
    } else if (!e.target.checked && addPrice > 0) {
      setAddPrice(addPrice - 5);
    }

    if (type === "checkbox" && checked) {
      setMaterials((prev) => [...prev, name]);
    } else {
      setMaterials((prev) => prev.filter((item) => item !== name));
    }
  };

  const clickHandler = (e) => {
    const { id } = e.target;
    if (id === "button1" && multiply > 1) {
      setMultiply(multiply - 1);
    } else if (id === "button2") {
      setMultiply(multiply + 1);
    }
  };

  useEffect(() => {
    addPrice >= 20 ? setMaterialValid(true) : setMaterialValid(false);
    addPrice <= 50 ? setBigTenMaterial(true) : setBigTenMaterial(false);
  }, [addPrice]);

  useEffect(() => {
    materialValid &&
    bigTenMaterial &&
    validInput &&
    nameAndNotes.name.length !== 0
      ? setFormValid(true)
      : setFormValid(false);
  }, [materialValid, bigTenMaterial, validInput]);

  useEffect(() => {
    setNameAndNotes({ ...nameAndNotes, size: size, thin: bread });
    finalOrder({
      size: nameAndNotes.size,
      thin: nameAndNotes.thin,
      name: nameAndNotes.name,
      notes: nameAndNotes.notes,
      material: materials,
    });
  }, [nameAndNotes, materials]);

  useEffect(() => {
    price({ addPrice: addPrice, multiply: multiply });
  }, [addPrice, multiply]);

  useEffect(() => {
    validate(formValid);
  }, [formValid]);

  return (
    <form className="w-full">
      <div className="flex font-roboto justify-start w-full flex-col gap-y-4 text-sm xs:text-xs">
        <h1 className="font-semibold text-xl">Ek Malzemeler</h1>
        <p className="text-softGri text-sm ">
          En fazla 10 malzeme seçebilirsiniz. 5 ₺
        </p>

        <div className="w-full flex justify-between items-start">
          <div className="flex w-[33%] flex-col  justify-start gap-y-2 xs:w-full">
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Pepperoni"
              />
              <label htmlFor="checkbox1" check>
                Pepperoni
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Tavuk Izgara"
              />
              <label htmlFor="checkbox2" check>
                Tavuk Izgara
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Mısır"
              />
              <label htmlFor="checkbox3" check>
                Mısır
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Sarımsak"
              />
              <label htmlFor="checkbox3" check>
                Sarımsak
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Ananas"
              />
              <label htmlFor="checkbox3" check>
                Ananas
              </label>
            </div>
          </div>
          <div className="flex w-[33%] flex-col  justify-start gap-y-2 xs:w-full">
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Sosis"
              />
              <label htmlFor="checkbox1" check>
                Sosis
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Soğan"
              />
              <label htmlFor="checkbox2" check>
                Soğan
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Sucuk"
              />
              <label htmlFor="checkbox3" check>
                Sucuk
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Biber"
              />
              <label htmlFor="checkbox3" check>
                Biber
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Kabak"
              />
              <label htmlFor="checkbox3" check>
                Kabak
              </label>
            </div>
          </div>
          <div className="flex w-[33 %] flex-col  h-full  gap-y-2 xs:w-full">
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Kanada Jambonu"
              />
              <label htmlFor="checkbox1" check>
                Kanada Jambonu
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Domates"
              />
              <label htmlFor="checkbox2" check>
                Domates
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Jalepeno"
              />
              <label htmlFor="checkbox3" check>
                Jalepeno
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                type="checkbox"
                name="Marul"
              />
              <label htmlFor="checkbox3" check>
                Marul
              </label>
            </div>
          </div>
        </div>
        {!materialValid && (
          <div className="text-red">En az 4 tane ürün seçmelisiniz</div>
        )}
        {!bigTenMaterial && (
          <div className="text-red">En fazla 10 tane ürün seçebilirsiniz</div>
        )}

        <label className="font-semibold text-xl" htmlFor="text">
          Name
        </label>
        <input
          value={nameAndNotes.name}
          onChange={changeHandler}
          className="bg-bej p-2 rounded-md  focus:border-none"
          type="text"
          id="text"
          name="name"
        ></input>
        {!validInput && (
          <div className="text-red">
            {" "}
            İsim en az 3 karakterden oluşturulmalıdır.{" "}
          </div>
        )}
        <label className="font-semibold text-xl" htmlFor="textarea">
          Sipariş Notu
        </label>
        <textarea
          value={nameAndNotes.notes}
          onChange={changeHandler}
          className="bg-bej p-4 rounded-md mb-4"
          name="notes"
          id="notes"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        ></textarea>
        <hr className="mb-4" />

        <div className="w-full flex justify-between items-start gap-x-2 xs:justify-center xs:flex-col xs:items-center xs:gap-y-2">
          <div>
            <div className="w-[30%] flex font-bold items-start justify-start ">
              <button
                id="button1"
                onClick={clickHandler}
                type="button"
                className="bg-yellow px-4 py-2 rounded-sm"
              >
                -
              </button>
              <div className="bg-white px-4 py-2 border border-gray-400">
                {multiply}
              </div>
              <button
                id="button2"
                onClick={clickHandler}
                type="button"
                className="bg-yellow px-4 py-2 rounded-sm"
              >
                +
              </button>
            </div>
          </div>
          <div className="bg-bej w-[60%] rounded-md xs:w-full">
            <TotalPrice
              formValid={formValid}
              multiply={multiply}
              addPrice={addPrice}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddMaterial;
