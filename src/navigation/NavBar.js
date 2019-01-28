import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {signOut} from '../store/actions/authenticationActions'
import {connect} from 'react-redux'
class NavBar extends Component {
    state = {
        signedIn : true
    }
 
    render() {
    return (
      <div>
        <nav className="nav-wrapper grey darken-3">
            <div className="ui container">
                <Link to="/home" className="brand-logo">Project Creator</Link>
            <ul className="right">
           <li>
           <a onClick={this.props.signOut}>Log Out</a>
           </li>
       </ul>
            </div>
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
    return{
      signOut : () => dispatch(signOut())
    }
  }

export default connect(null,mapDispatchToProps)(NavBar);