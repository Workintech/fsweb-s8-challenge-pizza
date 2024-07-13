import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./layouts/HomePage";
import OrderPage from "./layouts/OrderPage";
import SuccessPage from "./layouts/SuccessPage";
import { useState } from "react";

function App() {
  const [size, setSize] = useState("S");
  const [bread, setBread] = useState(null);
  const [order, setOrder] = useState(null);

  const selectSize = (value) => {
    setSize(value);
  };

  const selectBread = (value) => {
    setBread(value);
  };

  const finalOrder = (value) => {
    setOrder(value);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/order" exact>
        <OrderPage
          finalOrder={finalOrder}
          selectBread={selectBread}
          selectSize={selectSize}
          size={size}
          bread={bread}
        />
      </Route>
      <Route path="/success" exact>
        <SuccessPage order={order} bread={bread} size={size} />
      </Route>
    </Switch>
  );
}

export default App;
