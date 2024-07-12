import { useState } from "react";
import TotalPrice from "./TotalPrice";

const initialState = {
  name: "",
  notes: "",
};

function AddMaterial() {
  const [addPrice, setAddPrice] = useState(0);
  const [nameAndNotes, setNameAndNotes] = useState(initialState);

  const changeHandler = (e) => {
    if (e.target.checked) {
      setAddPrice(addPrice + 5);
    } else if (!e.target.checked && addPrice > 0) {
      setAddPrice(addPrice - 5);
    }
  };

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setNameAndNotes({ ...nameAndNotes, [name]: value });
  };

  console.log(addPrice);
  console.log(nameAndNotes);

  return (
    <form className="w-full">
      <div className="flex font-roboto justify-start w-full flex-col gap-y-4 text-sm">
        <h1 className="font-semibold text-xl">Ek Malzemeler</h1>
        <p className="text-softGri text-sm ">
          En fazla 10 malzeme seçebilirsiniz. 5 ₺
        </p>

        <div className="w-full flex justify-between items-start">
          <div className="flex w-[33%] flex-col  justify-start gap-y-2 ">
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox1"
                type="checkbox"
              />
              <label htmlFor="checkbox1" check>
                Pepperoni
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox2"
                type="checkbox"
              />
              <label htmlFor="checkbox2" check>
                Tavuk Izgara
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Mısır
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Sarımsak
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Ananas
              </label>
            </div>
          </div>
          <div className="flex w-[33%] flex-col  justify-start gap-y-2 ">
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox1"
                type="checkbox"
              />
              <label htmlFor="checkbox1" check>
                Sosis
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox2"
                type="checkbox"
              />
              <label htmlFor="checkbox2" check>
                Soğan
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Sucuk
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Biber
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Kabak
              </label>
            </div>
          </div>
          <div className="flex w-[33 %] flex-col  h-full  gap-y-2 ">
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox1"
                type="checkbox"
              />
              <label htmlFor="checkbox1" check>
                Kanada Jambonu
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox2"
                type="checkbox"
              />
              <label htmlFor="checkbox2" check>
                Domates
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Jalepeno
              </label>
            </div>
            <div className="  flex justify-start items-center gap-x-2">
              <input
                onChange={changeHandler}
                className="w-8 h-8 cursor-pointer accent-yellow "
                id="checkbox3"
                type="checkbox"
              />
              <label htmlFor="checkbox3" check>
                Marul
              </label>
            </div>
          </div>
        </div>

        <label className="font-semibold text-xl" htmlFor="text">
          Name
        </label>
        <input
          value={nameAndNotes.name}
          onChange={inputHandler}
          className="bg-bej p-2 rounded-md  focus:border-none"
          type="text"
          id="text"
          name="name"
        ></input>
        <label className="font-semibold text-xl" htmlFor="textarea">
          Sipariş Notu
        </label>
        <textarea
          value={nameAndNotes.notes}
          onChange={inputHandler}
          className="bg-bej p-4 rounded-md mb-4"
          name="notes"
          id="notes"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        ></textarea>
        <hr className="mb-4" />

        <div className="w-full flex justify-between items-start gap-x-2">
          <div>
            <div className="w-[30%] flex font-bold items-start justify-start ">
              <button type="button" className="bg-yellow px-4 py-2 rounded-sm">
                -
              </button>
              <div className="bg-white px-4 py-2 border border-gray-400">1</div>
              <button type="button" className="bg-yellow px-4 py-2 rounded-sm">
                +
              </button>
            </div>
          </div>
          <div className="bg-bej w-[60%] rounded-md">
            <TotalPrice />
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddMaterial;
