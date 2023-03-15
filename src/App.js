import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Select from "./components/Select";
import Success from "./components/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/order-pizza" element={<Select />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  
  );
};
export default App;
