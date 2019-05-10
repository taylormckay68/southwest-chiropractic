import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

export default(
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/services/:id' component={Services}></Route>
        <Route path='/contact' component={Contact}></Route>

    </Switch>
)