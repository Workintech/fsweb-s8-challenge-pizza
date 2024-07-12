import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./layouts/HomePage";
import OrderPage from "./layouts/OrderPage";
import SuccessPage from "./layouts/SuccessPage";
import { useState } from "react";

function App() {
  const [size, setSize] = useState("M");

  const selectSize = (value) => {
    setSize(value);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/order" exact>
        <OrderPage selectSize={() => selectSize(value)} />
      </Route>
      <Route path="/success" exact>
        <SuccessPage size={size} />
      </Route>
    </Switch>
  );
}

export default App;
