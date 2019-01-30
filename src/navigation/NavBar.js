import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {signOut} from '../store/actions/authenticationActions'
import {connect} from 'react-redux'
class NavBar extends Component {
    state = {
        signedIn : true
    }
 
    render() {
      
      const name = 'Developer'
    return (
      <div>
        <nav className="nav-wrapper grey darken-3">
            <div className="ui container">
                <Link to="/home" className="brand-logo">Dynamic Forms {`</>`}</Link>
            <ul className="right">
            <li>
              {`Hey ${name} !!!`}
            </li>
           <li>
           <Link onClick={this.props.signOut} to="/">Log Out</Link>
           </li>
          </ul>
            </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    authError : state.auth.authError,
    auth : state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch)=>{
    return{
      signOut : () => dispatch(signOut())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);