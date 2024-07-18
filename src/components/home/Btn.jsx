import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "reactstrap";

function Btn({ name }) {
  const history = useHistory();
  return (
    <Button
      onClick={() => history.push("/order")}
      className="bg-yellow  hover:bg-white mt-[1.5rem] rounded-full w-28 text-black font-barlow font-medium text-xs border-0 xs:text-lg xs:font-semibold xs:w-32 xs:mt-[1rem]"
    >
      {name}
    </Button>
  );
}

export default Btn;
