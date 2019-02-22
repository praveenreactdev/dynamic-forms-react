import React, { Component } from 'react'
import {SectionsContainer, Section} from 'react-fullpage';
import DynamicComponent from './DynamicComponent';
import uuid from 'uuid';
import './styles/style.css'
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';

const formData = [
    {
      id: uuid(),
      type: 'inputfield',
      props: {
        id: 'FirstName',
        floatingLabelText: 'First Name',
      }
    },
    {
        id: uuid(),
        type: 'inputfield',
        props: {
          id: 'LastName',
          floatingLabelText: 'Last Name',
        }
      },
      {
        id: uuid(),
        type: 'inputfield',
        props: {
          id: 'Email',
          floatingLabelText: 'Email',
        }
      },
      {
        id: uuid(),
        type: 'inputfield',
        props: {
          id: 'MyName',
          floatingLabelText: 'Praveen',
        }
      },
      {
        id: uuid(),
        type: 'Button',
        props: {
          id: 'button',
          floatingLabelText: 'test',
        }
      }
  ];

class ParentComponent extends Component {
  
  state = {
    data: formData
  }

 onChange = (data)=>{
   this.setState({data: data.jsObject})
   console.log('state change by Json Input',this.state)
}
  onDataChange = (ref,value)=>{
  this.setState({[ref]:value})
    console.log('state',this.state)
  }
  render() {
    return (
      <div>
        <SectionsContainer>
            <Section>
                <div id="container_editor" >
                  <div ref="editor "id="editor">
                  <JSONInput
                        id          = 'editor'
                        placeholder = { formData }
                        locale      = { locale }
                        onChange = {this.onChange}
                    />
                  </div>
                  <div id="core_component">
                  <DynamicComponent formData={this.state.data} onChangeFunction={this.onDataChange}/> 
                  </div>
                </div>
            </Section>
        </SectionsContainer>
      </div>
    )
  }
}


export default ParentComponent;