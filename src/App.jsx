import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./layouts/HomePage";
import OrderPage from "./layouts/OrderPage";
import SuccessPage from "./layouts/SuccessPage";
import { useEffect, useState } from "react";

function App() {
  const [size, setSize] = useState("S");
  const [bread, setBread] = useState(null);
  const [order, setOrder] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [validation, setvalidation] = useState(null);

  const selectSize = (value) => {
    setSize(value);
  };

  const selectBread = (value) => {
    setBread(value);
  };

  const finalOrder = (value) => {
    setOrder(value);
  };

  const price = (value) => {
    setTotalPrice(value);
  };

  const validate = (value) => {
    setvalidation(value);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/order" exact>
        <OrderPage
          validation={validation}
          validate={validate}
          price={price}
          finalOrder={finalOrder}
          selectBread={selectBread}
          selectSize={selectSize}
          size={size}
          bread={bread}
          order={order}
        />
      </Route>
      <Route path="/success" exact>
        <SuccessPage totalPrice={totalPrice} order={order} />
      </Route>
    </Switch>
  );
}

export default App;
