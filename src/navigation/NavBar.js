import React, { Component } from 'react'
import {Link,Redirect,NavLink} from 'react-router-dom';
export default class NavBar extends Component {
    state = {
        signedIn : true
    }
    signOut = ()=>{
        console.log(this.state)
        this.setState({
            signedIn:false
        })
    }
    render() {
        const {signedIn} = this.state;
        if(!signedIn) return <Redirect to="/"/>
    return (
      <div>
        <nav className="nav-wrapper grey darken-3">
            <div className="ui container">
                <Link to="/home" className="brand-logo">Project Creator</Link>
            <ul className="right">
           <li>
           <NavLink className = "btn btn-floating light-green lighten-2" to="/">Sam</NavLink>
           </li>
       </ul>
            </div>
        </nav>
      </div>
    )
  }
}
