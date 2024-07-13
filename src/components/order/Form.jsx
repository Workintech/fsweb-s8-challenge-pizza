import axios from "axios";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import AddMaterial from "./AddMaterial";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialState = {
  active1: false,
  active2: false,
  active3: false,
};

function Form({
  validation,
  validate,
  order,
  price,
  size,
  selectSize,
  selectBread,
  finalOrder,
}) {
  const [active, setActive] = useState(initialState);
  const [bread, setBread] = useState(null);
  const [validBread, setValidBread] = useState(null);

  const history = useHistory();

  const clickHandler = (e) => {
    if (e.target.id === "active1") {
      setActive({ ...initialState, active1: true });
      selectSize("S");
    } else if (e.target.id === "active2") {
      setActive({ ...initialState, active2: true });
      selectSize("M");
    } else if (e.target.id === "active3") {
      setActive({ ...initialState, active3: true });
      selectSize("L");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validation) {
      axios
        .post("https://reqres.in/api/pizza ", order)
        .then((res) => {
          console.log(res.data);
          history.push("/success");
        })
        .catch((err) => console.warn(err));
    }
  };

  const selectThinBread = (value) => {
    setBread(value);
  };

  useEffect(() => {
    setActive({ ...initialState, active1: true });
  }, []);

  useEffect(() => {
    bread === "İnce" || bread === "Kalın"
      ? setValidBread(true)
      : setValidBread(false);
  }, [bread]);

  return (
    <form
      onSubmit={submitHandler}
      className="w-screen flex flex-col justify-center items-center p-2 font-roboto mt-4 mb-4 "
    >
      <section className="w-[30%] flex flex-col justify-center items-center gap-y-4 xs:w-[80%] ">
        <div className="w-full flex justify-between ">
          <span className="font-bold text-sm xs:text-lg">
            Boyut Seç<span className="text-red">*</span>
          </span>
          <span className="font-bold text-sm xs:text-lg">
            Hamur Seç<span className="text-red">*</span>
          </span>
        </div>
        <div className="w-full flex justify-between items-center xs:items-start xs:justify-around">
          <div className="w-[40%] flex justify-between items-center xs:flex-col gap-y-2 xs:items-start">
            <button
              type="button"
              id="active1"
              onClick={clickHandler}
              className={`rounded-full w-12 h-12 p-2 text-xs text-softGri font-semibold  ${
                active.active1 ? "bg-yellow" : "bg-bej"
              }`}
            >
              {" "}
              S
            </button>
            <button
              type="button"
              id="active2"
              onClick={clickHandler}
              className={` rounded-full w-12 h-12 p-2 text-xs text-softGri font-semibold ${
                active.active2 ? "bg-yellow" : "bg-bej"
              }`}
            >
              {" "}
              M
            </button>
            <button
              type="button"
              id="active3"
              onClick={clickHandler}
              className={` rounded-full w-12 h-12 p-2 text-xs text-softGri font-semibold ${
                active.active3 ? "bg-yellow" : "bg-bej"
              }`}
            >
              L
            </button>
          </div>
          <DropDown
            selectThinBread={selectThinBread}
            selectBread={selectBread}
          />
        </div>
        {!validBread && (
          <div className="w-full text-right text-red">
            Lütfen hamur kalınlığını seçiniz.
          </div>
        )}
      </section>

      <section className="w-[31%] flex flex-col justify-start items-center gap-y-4 mt-4 xs:w-[85%]">
        <AddMaterial
          validate={validate}
          price={price}
          size={size}
          bread={bread}
          finalOrder={finalOrder}
        />
        <button
          disabled={!validation}
          type="submit"
          className={`w-full ${
            validation ? "bg-yellow" : "bg-gray-300"
          } py-3 rounded-md text-lg font-medium`}
        >
          SİPARİŞ VER
        </button>
      </section>
    </form>
  );
}

export default Form;
