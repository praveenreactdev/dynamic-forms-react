import React, { Component } from 'react'
import CustomComponentV2 from './CustomComponentV2'

class DynamicComponentV2 extends Component {
    render() {
     const {formData} = this.props;
     const {onClickNext,onClickPrev} = this.props;
     console.log(typeof(onClickNext))
     if(!formData) return <div style={{color:'red',fontSize:'46px'}}>No data</div>
     return (
        formData.map((component)=>{
            return (
                   <CustomComponentV2 data={component} 
                                      key={component.ComponentId}
                                      onClickNext={onClickNext}
                                      onClickPrev={onClickPrev}/>
            );
        })
       )
    }
}

export default  DynamicComponentV2