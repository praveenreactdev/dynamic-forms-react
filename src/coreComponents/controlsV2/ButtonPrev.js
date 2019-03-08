import React from 'react'

const button_previous = (props)=> {
    console.log('Inside button')
    const component = props.data;
    const {onClickPrev} = props;
    console.log(typeof(onClickPrev))
  return (
      <span>
            <span className="input-field" >
                <button className="ui button primary" style={{marginLeft:'66px'}} id={component.ComponentId} onClick={onClickPrev}>
                        {component.ComponentLabel}
                </button>
            </span>
      </span>
  )
}

export default button_previous;