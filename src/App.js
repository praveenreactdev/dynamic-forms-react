import React, { Component } from 'react'
import SignIn from './components/SignIn'
import Home from './dashboard/Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    
    return (
        <BrowserRouter>
        <div className="ui container">
          <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/home" component={Home}/>
        {  /*  <Route path="/demo" component={Demo}/> */}
          </Switch>
        </div>
        </BrowserRouter>
    )
  }
}
