import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./layouts/HomePage";
import OrderPage from "./layouts/OrderPage";
import SuccessPage from "./layouts/SuccessPage";
import { useState } from "react";

function App() {
  const [size, setSize] = useState("S");
  const [bread, setBread] = useState(null);

  const selectSize = (value) => {
    setSize(value);
  };

  const selectBread = (value) => {
    setBread(value);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/order" exact>
        <OrderPage selectBread={selectBread} selectSize={selectSize} />
      </Route>
      <Route path="/success" exact>
        <SuccessPage bread={bread} size={size} />
      </Route>
    </Switch>
  );
}

export default App;
