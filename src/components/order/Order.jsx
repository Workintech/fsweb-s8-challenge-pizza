import React from "react";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
function Order({ selectSize, selectBread }) {
  return (
    <div>
      <Header />
      <Main />
      <Form selectBread={selectBread} selectSize={selectSize} />
    </div>
  );
}

export default Order;
