import React, { Component } from 'react'

class CustomComponentV2 extends Component {
  render() {
    const component = this.props.data;
    console.log(component)
    return (
      <div className="ui container">
      <div className="input-field">
              <label htmlFor={component.ComponentId}>{component.ComponentLabel}</label>
                <input type="text" id={component.ComponentId} style={{color:'black'}} ref={component.ComponentId} 
                placeholder={component.PlaceHolderText} onChange={e=>console.log(e.target.value)}
             />
      </div>
      </div>
    )
  }
}
export default CustomComponentV2