import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Login from './components/login';
import Signup from './components/signup';
import App from './components/app';
import Nav from './components/nav'
import jacksons from './jacksons'
import Card from './components/card';
import Add from './components/add';

const CardRouter =(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
	    <Route path="/login" component={Login}/>
	    <Route path="/signup" component={Signup}/>
	    <Route path="/add" component={Add}/>
	    <Route path="/jackson/:id" component={Card}/>
	</Router>
)


console.log(jacksons);

ReactDOM.render(CardRouter, document.querySelector('.container'))
