import React, { Component }  from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/';
import App from '../App';
import Form from '../pages/Form';
import "./FormHeader.css"
const FormHeader=()=>{

    return(
  
          <div className='header'>
             <nav className='nav'>
          <ul>
            <li>
              <Link  className='navLink' to="/">Ana Sayfa</Link>
            </li>
            <p>-</p>
            <li>
              <Link className='navLink' to="/pizza" >Sipariş Oluştur</Link>
            </li>
          </ul>
        </nav>
          </div>
         
    ); 
}
export default FormHeader;