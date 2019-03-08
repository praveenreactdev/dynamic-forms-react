import React from 'react'

const button_next = (props)=> {
    console.log('Inside button')
    const component = props.data;
    const {onClickNext} = props;

  return (
      <span>
            <span className="input-field" >
                <button className="ui button primary" style={{marginLeft:'66px'}} id={component.ComponentId} onClick={onClickNext}>
                        {component.ComponentLabel}
                </button>
            </span>
      </span>
  )
}

export default button_next;