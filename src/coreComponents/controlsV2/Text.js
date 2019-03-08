import React from 'react'
import M from "materialize-css";
const Text = (props)=> {
   const component = props.data;
   M.updateTextFields()
   
  return (
    <div>
       <label className="active" htmlFor={component.ComponentId} style={{margin:'8px'}}>{component.ComponentLabel}</label>
        <input type="text" id={component.ComponentId} className="validate"style={{color:'black'}} defaultValue={component.DefaultValue}
                placeholder={component.PlaceHolderText} data-length={component.MaxLength} onChange={e=>console.log(e.target.value)}
                name={component.ComponentName}
        />
         
    </div>
  )
}

export default Text;