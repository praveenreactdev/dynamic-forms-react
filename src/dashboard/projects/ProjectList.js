import React, { Component } from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux';
import {addField} from '../../store/actions/addField'
class ProjectList extends Component {

    onClick = (e)=>{
        const fieldData= {
            name : 'Middle Name',
            value: '',
            id : uuid(),
            placeholder : 'Middle Name',
            type: 'text'
        }
        this.props.addField(fieldData);
    }

  render() {
    return (
      <div className="container" style={{backgroundColor:'white',height:'100%',marginTop:'8px'}}>
       {
           this.props.fields.inputArray.map((input)=>{
               return(
                <div className="input-field" key={input.id}>
                    <label htmlFor={input.name}>{input.name}</label>
                    <input type={input.type} id={input.name} onChange={this.handleChange}></input>
                </div>
               )
           })
       }
         <button className="btn pink lighten-2 z-depth-0" onClick={this.onClick}>
                Add Field
         </button>
      
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  const {fields} = state;
  return {
      fields
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addField : (fieldData)=>dispatch(addField(fieldData))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectList);