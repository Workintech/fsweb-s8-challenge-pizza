import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import OrderForm from './components/OrderForm';
import OrderComplete from './components/OrderComplete'
import { toast, ToastContainer, Bounce } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/orderform" component={OrderForm} />
        <Route path="/ordercomplete" component={OrderComplete} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </Router>
  );
}

export default App;

