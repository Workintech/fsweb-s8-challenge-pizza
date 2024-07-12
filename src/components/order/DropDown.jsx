import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropDown({ selectBread }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [header, setHeader] = useState("-Hamur Kalınlığı Seç-");
  const [thin, setThin] = useState(null);

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };

  useEffect(() => {
    selectBread(thin);
  }, [thin]);

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
            onClick={() => {
              setHeader("İnce");
              setThin("İnce");
            }}
          >
            İnce
          </DropdownItem>
          <DropdownItem
            className="text-sm hover:bg-softGri hover:text-white"
            onClick={() => {
              setHeader("Kalın");
              setThin("İnce");
            }}
          >
            Kalın
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropDown;
