import React, { Component }  from 'react';
import EntryPage from '../pages/EntryPage';
import { Route, Switch } from 'react-router-dom';
import Form from '../pages/Form';
import ResultPage from "../pages/ResultPage"


const PageBody=()=>{
    return <div>
     <div>
    <Switch>
       <Route path="/" exact>
           <EntryPage/>
        </Route>
        <Route path="/pizza" exact>
           <Form/>
        </Route> 
        <Route path="/result" exact>
           <ResultPage/>
        </Route> 
      </Switch>
    </div>
    </div>
    }
    export default PageBody;