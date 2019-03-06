import React, { Component } from 'react'

export default class DynamicComponentV2 extends Component {
    render() {
     
        const {formData} = this.props;
        if((!formData) ){console.log('no form data')}else{
            console.log("DynamicComponentV2",formData)
            formData.map((component)=>{
                console.log(component)
            })
        }
      
        
        return <div/>
    }
}
