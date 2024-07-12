import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropDown() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [header, setHeader] = useState("-Hamur Kalınlığı Seç-");

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <div>
      <Dropdown isOpen={dropDownOpen} toggle={toggle}>
        <DropdownToggle
          className="text-sm px-4 py-2 bg-bej text-gri hover:bg-softGri"
          caret
        >
          {header}
        </DropdownToggle>
        <DropdownMenu className="bg-bej">
          <DropdownItem header> Hamur kalınlığı </DropdownItem>
          <DropdownItem
            className="text-sm hover:bg-softGri hover:text-white"
            onClick={() => setHeader("İnce")}
          >
            İnce
          </DropdownItem>
          <DropdownItem
            className="text-sm hover:bg-softGri hover:text-white"
            onClick={() => setHeader("Kalın")}
          >
            Kalın
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropDown;
