import React, { Component } from 'react'
import NavBar from '../navigation/NavBar';
import ProjectList from './projects/ProjectList';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
 class Home extends Component {
  
  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to="/"/>
    return (
      <div className="home" style={{backgroundColor:'white',height:'100%',marginTop:'3px'}}>
        <NavBar/>
        <div style={{maxHeight:'100%',backgroundColor:'white'}}>
        <ProjectList/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {
      auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(Home);