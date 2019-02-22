import React, { Component } from 'react'

class inputfield extends Component {
  render() {
   
  const innerProps = this.props.props.type
  const {onChange} = this.props;
 const componentProps = this.props.props.type.props;
 
    return (
      <div className="ui container">
        <div className="input-field">
                <label htmlFor={innerProps.id}>{innerProps.props.floatingLabelText}</label>
                <input type="text" id={innerProps.id} style={{color:'black'}} ref={componentProps.id} onChange={(e)=>{
                  onChange(componentProps.id,e.target.value)
                }}/>
            </div>
      </div>
    )
  }
}

export default inputfield;