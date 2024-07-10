import React from "react";
import { Button } from "reactstrap";

function Btn({ name }) {
  return (
    <Button className="bg-yellow  hover:bg-white mt-[1.5rem] rounded-full w-28 text-black font-barlow font-medium text-xs border-0 xs:text-lg xs:font-semibold xs:w-32 xs:mt-[1rem]">
      {name}
    </Button>
  );
}

export default Btn;
