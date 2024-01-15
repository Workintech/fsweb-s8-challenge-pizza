import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Form from "./pages/Form";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AnaSayfa from "./layoutComponents/AnaSayfa";
import Header from './layoutComponents/Header';
import PageBody from './layoutComponents/PageBody';



const App = () => {
  return (
    <>
    <Header/>
    <PageBody/>
    </>
  
  );
};
export default App;
