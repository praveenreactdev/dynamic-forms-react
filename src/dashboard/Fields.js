import React, { Component } from 'react'

 class Fields extends Component {

shouldComponentUpdate(){
    return true;
}

  render() {
      
    return (
      <div>
      <p style={{bacgroundColor:'black'}}>test {this.props.fields.obj.name}</p>
      </div>
    )
  }
}

export default Fields