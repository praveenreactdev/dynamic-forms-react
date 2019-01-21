import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
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
                <Link to="/" className="brand-logo">Project Creator</Link>
            <ul className="right">
           <li>
               <button className= "btn btn-floating right pink lighten-2" onClick={this.signOut}>Log Out</button>
           </li>
       </ul>
            </div>
        </nav>
      </div>
    )
  }
}
