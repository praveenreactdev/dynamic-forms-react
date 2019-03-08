import React from 'react'
import M from "materialize-css";
const dateOfBirth = (props)=> {
    M.AutoInit()
    const component = props.data

  return (
    <div className="input-field">
      <input type="text" className="datepicker" id={component.ComponentId}/>
      <label for={component.ComponentId}>{component.ComponentLabel}</label>
    </div>
  )
}

export default dateOfBirth;