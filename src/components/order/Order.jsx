import React from "react";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "../home/Footer";
function Order({ size, bread, selectSize, selectBread, finalOrder }) {
  return (
    <div className="w-screen">
      <Header />
      <Main />
      <Form
        size={size}
        bread={bread}
        finalOrder={finalOrder}
        selectBread={selectBread}
        selectSize={selectSize}
      />
      <Footer />
    </div>
  );
}

export default Order;
