import React from "react";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
function Order({ selectSize }) {
  return (
    <div>
      <Header />
      <Main />
      <Form selectSize={selectSize} />
    </div>
  );
}

export default Order;
