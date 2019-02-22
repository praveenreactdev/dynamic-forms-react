import React, { Component } from 'react'
import * as Controls from './controls/index'
class CustomComponent extends Component {
  render() {
      const type = this.props.type.type;
      const {onChangeFunction} = this.props;
      const Component = Controls.default[type];
    return (
      <div>
       <Component props={this.props} onChange={onChangeFunction}/>
      </div>
    )
  }
}

export default  CustomComponent;