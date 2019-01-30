import React, { Component } from 'react'
import {SectionsContainer, Section} from 'react-fullpage';

const formData = [
    {
      id: "name",
      type: 'textfield',
      props: {
        id: 'name',
        floatingLabelText: 'Hello, Whats your name?',
        hintText: 'Name is required'
      }
    }  
  ];
 class PlayGround extends Component {

    state= {
        obj : {
            name : ''
        }
    };

    PlayGroundOnChange = (e)=>{
        e.preventDefault();
        this.setState({[e.target.id]:e.target.value})
    }   

  render() {
    const splitLeft = {
        height:'100%',
        width:'50%',
        position:'fixed',
        zIndex:'1',
        top:'0',
        overflowTx:'hidden',
        paddingTop:'2px',
        marginLeft:'2px',
        left:'0',
        backgroundColor:'#181818',
        color:'white'
    }
    const splitRight = {
        height:'100%',
        width:'50%',
        position:'fixed',
        zIndex:'1',
        top:'0',
        overflowTx:'hidden',
        paddingTop:'6px',
        right:'0',
        backgroundColor:'white',
        color:'black'
    }

    const divStyle = {
        margin : '4px'
    }

    return (
      <div>
      <p style={{textAlign:'center',height:'4px',paddingBottom:'24px'}}> JSON Based Dynamic Form Generator </p>
      <hr/>
        <SectionsContainer>
            <Section>

            </Section>
        </SectionsContainer>
      </div>
    )
  }
}

export default PlayGround