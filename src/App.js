import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import {NavLink} from 'react-router-dom';
// import {Route,Switch,Router} from 'react-router-dom';
import Dashboard from './components/Dashboard';




// import Login from '../components/Login';


function App() {
  return (
    <>
        <Router>
                <Switch>
                <Route path="/" exact component = {Home} />
                {/* <Route path="/sign-up" exact component = {SignUp} /> */}
                 <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/dashboard/:id' component={Dashboard}/> 
                 <Route exact path='/login' component={SignUp}/> 
                </Switch>
        </Router>
    </>
  )
}

export default App

