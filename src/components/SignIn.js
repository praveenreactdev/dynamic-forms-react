import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {signIn} from '../store/actions/authenticationActions';
import {connect} from 'react-redux'
class SignIn extends Component {
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
<<<<<<< HEAD
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
=======
   
        handleSubmit = (e)=>{
            e.preventDefault();
            this.props.signIn(this.state)
          }
  render() {
    const {auth} = this.props;
    
    if(auth.uid) return <Redirect to="/home"/>
>>>>>>> 7f417b8ebb595dd9d9d447bbb7c46dc9b3eb8b07
        return (
        <div className="container" style={{marginTop:180}}>
        <form onSubmit={this.handleSubmit} style={{backgroundColor:'#181818',color:'white',opacity:'0.9'}}>
            <h5 className="#181818 text-darken-3 text-align center" >Sign In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} style={{color:'white'}} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} style={{color:'white'}}/>
            </div>
            <div className="input-field">
                <button className="btn lighten-2 z-depth-0" style={{marginLeft:'35%',backgroundColor:'#f96816',width:'35%',paddingLeft:'24px'}}>
                Login
                </button>
            </div>
        </form>
        
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
      signIn : (creds)=>dispatch(signIn(creds))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SignIn)