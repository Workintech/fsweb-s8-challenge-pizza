import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import AddMaterial from "./AddMaterial";

const initialState = {
  active1: false,
  active2: false,
  active3: false,
};

function Form({ selectSize }) {
  const [active, setActive] = useState(initialState);

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

  useEffect(() => {
    setActive({ ...initialState, active1: true });
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center p-2 font-roboto mt-4">
      <section className="w-[30%] flex flex-col justify-center items-center gap-y-4">
        <div className="w-full flex justify-between">
          <span className="font-bold text-sm">
            Boyut Seç<span className="text-red">*</span>
          </span>
          <span className="font-bold text-sm">
            Hamur Seç<span className="text-red">*</span>
          </span>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[40%] flex justify-between items-center">
            <button
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
              id="active3"
              onClick={clickHandler}
              className={` rounded-full w-12 h-12 p-2 text-xs text-softGri font-semibold ${
                active.active3 ? "bg-yellow" : "bg-bej"
              }`}
            >
              L
            </button>
          </div>
          <DropDown />
        </div>
      </section>

      <section className="w-[31%] flex flex-col justify-start items-center gap-y-4 mt-4">
        <AddMaterial />
      </section>
    </div>
  );
}

export default Form;
