import React, { Component } from 'react'
import NavBar from '../navigation/NavBar';
import ProjectList from './projects/ProjectList';
 class Home extends Component {
  
  render() {
    const divStyle = {
      marginTop: '40px',
    };
    return (
      <div className="home" style={{backgroundColor:'white',height:'100%',marginTop:'3px'}}>
        <NavBar/>
        <ProjectList/>
      </div>
    )
  }
}

export default Home