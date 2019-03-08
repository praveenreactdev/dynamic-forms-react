import React from 'react'
import M from "materialize-css";
const Select = (props)=> {
    const component = props.data;
    const options = component.SubApplicationAttributeValueList;
    M.AutoInit()
  return (
    <div className="input-field">
        <label className="active">{component.ComponentLabel}</label>
        <select defaultValue={options[0].DisplayValue}>
            <option value="" disabled>Choose your option</option>
            {
            options.map(option=>{
                return <option value={option.Value} key={option.DisplayValue}>{option.DisplayValue}</option>
            })
            }
        </select>

</div>
  )
}

export default Select;