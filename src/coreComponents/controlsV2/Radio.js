import React from 'react'

const Radio=(props)=> {
    const component = props.data;
    const options = component.SubApplicationAttributeValueList;
    const componentLabel = component.ComponentLabel
  return (
    <div className="input-field">
    
    <p>{componentLabel}
        {
            options.map((radioButton)=>{
                   return(  
                        <label key={radioButton.Sequence}>
                            <input className="withGap" type="radio" name={radioButton.AttributeName} value={radioButton.DisplayValue}/>
                            <span>{radioButton.DisplayValue}</span>
                        </label>
                   )
            })
        }
        </p>

    </div>
  )
}

export default Radio