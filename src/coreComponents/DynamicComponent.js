import React, { Component } from 'react'
import CustomComponent from './CustomComponent';

 class DynamicComponent extends Component {
  render() {
     
      const {formData} = this.props;
      
    return (
     formData.map((component)=>{
         return (
             <div key={component.id}>
                <CustomComponent type={component}/>
             </div>
         );

     })
    )
  }
}

export default DynamicComponent