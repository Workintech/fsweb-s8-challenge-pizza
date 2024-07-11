import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "./components/home/Header";
import Main from "./components/home/Main";
import Footer from "./components/home/Footer";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Route>
    </Switch>
  );
}

export default App;
