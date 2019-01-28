import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class SignIn extends Component {
    state = {
        auth : false,
        email : '',
        password : ''
    }
      handleChange = (e)=>{
       
        this.setState({
          [e.target.id]: e.target.value
        });
  
      }
      handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        this.setState({
            auth:true
        })
      }

  render() {
    const {auth} = this.state;
    if(auth) return <Redirect to="/home"/>
        return (
        <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3 text-align center">Sign In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-2 z-depth-0">
                Login
                </button>
            </div>
        </form>
        
      </div>
    )
  }
}
