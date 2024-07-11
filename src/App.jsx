import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "./components/home/Header";
import Main from "./components/home/Main";
import Footer from "./components/home/Footer";
import Order from "./components/order/Order";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Route>
      <Route path="/order">
        <Order></Order>
      </Route>
    </Switch>
  );
}

export default App;
