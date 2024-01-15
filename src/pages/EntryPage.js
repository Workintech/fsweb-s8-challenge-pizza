/* eslint-disable jsx-a11y/alt-text */

import React, { Component, useState }  from 'react';
import { Button } from 'reactstrap';
import {useHistory, useParams} from "react-router-dom"
import Banner from "../img/banner.png.png"
import "./EntryPage.css"
const EntryPage=()=>{
    const history=useHistory()
    const handlerClick=()=>{
        history.push("/pizza")
    }
    return <div className='entryPage'>

      <p className='title'>KOD ACIKTIRIR <br/> PIZZA, DOYURUR</p>
       <Button id='order-pizza' className='button' onClick={handlerClick}>ACIKTIM</Button>
       <img className='banner' src={Banner}/> 
       
    </div>
    }
    export default EntryPage;