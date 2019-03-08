import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import * as Controls  from '../controlsV2/index'
class CustomComponentV2 extends Component {

  componentDidMount() {
    M.AutoInit();
}

  render() {
    const component = this.props.data;
    const componentType = component.ComponentType;
    const UIComponent = Controls.default[componentType]
    const {onClickNext,onClickPrev} = this.props;
    return (
      <div className="input-field">
        <UIComponent data={component} onClickNext={onClickNext}
                                      onClickPrev={onClickPrev}/>
      </div>
    )
  }
}
export default CustomComponentV2