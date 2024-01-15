import React, { Component }  from 'react';
import Logo from "../img/logo.svg"
import "./Header.css"
const Header=()=>{
return <div className='MainHeader'>
         <img className='logo' src={Logo}></img>
</div>
}
export default Header;
