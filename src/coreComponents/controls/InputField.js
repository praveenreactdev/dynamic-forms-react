import React, { Component } from 'react'

class inputfield extends Component {
  render() {
   
  const innerProps = this.props.props.type
  
    return (
      <div className="ui container">
        <div className="input-field">
                <label htmlFor={innerProps.id}>{innerProps.props.floatingLabelText}</label>
                <input type="text" id={innerProps.id} style={{color:'indigo'}} />
            </div>
      </div>
    )
  }
}

export default inputfield;