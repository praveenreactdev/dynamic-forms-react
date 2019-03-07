import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
class CustomComponentV2 extends Component {

  componentDidMount() {
    M.AutoInit();
}


  render() {
    const component = this.props.data;
    console.log(component)
    const options = [{value:1,data:'Option 1'},{value:2,data:'Option 2'}]
    if(component.ComponentType === 'Select')
    return (
     
      <div className="input-field">
          <select>
            <option value="" disabled selected>Choose your option</option>
           {
             options.map(option=>{
               return <option value={option.value} key={option.value}>{option.data}</option>
             })
           }
        </select>
      <label>Materialize Select</label>
      </div>
    )
    else{
      return <div/>
    }
  }
}
export default CustomComponentV2