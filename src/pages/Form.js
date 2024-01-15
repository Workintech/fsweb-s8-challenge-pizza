import React, { Component }  from 'react';
import Header from "../FormComponents/FormHeader"
import Section from "../FormComponents/FormSection"
import Footer from '../FormComponents/FormFooter';
import { Route, Switch } from 'react-router-dom';
const Form=()=>{
    
    return <div>

        <Header/>
        <Section/>
        <Footer/>
        
    </div>
}
export default Form;