import React, { Component } from 'react'
import {SectionsContainer, Section} from 'react-fullpage';
import DynamicComponent from './DynamicComponent';
import uuid from 'uuid';
import './styles/style.css'
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import appService from '../api/appService' 
import DynamicComponentV2 from './v2Components/DynamicComponentV2';

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
    data: formData,
    pages : [],
    pageData : []
  }
  
 onChange = (data)=>{
   this.setState({data: data.jsObject})
   console.log('state change by Json Input',this.state)
}
  onDataChange = (ref,value)=>{
  this.setState({[ref]:value})
    console.log('state',this.state)
  }
  async componentDidMount(){
   await  appService.get('/getPages').then((response)=>{
     console.log('ComponentDidMount',response.data)
     this.getPages(response.data)
    })
    
  }
  getPages = (axiosData)=>{
      const pagesFromResponse = axiosData.pages;
      for (let i=0;i<1;i++){
         appService.get(pagesFromResponse[i].url)
         .then((response)=>{
          const {pages} = this.state;
          pages.push(response.data.ApplicationDetail.SubApplicationDetailList[0].AttributeDetailList)
           this.setState({pages})
         })
      }
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <SectionsContainer>
            <Section>
                <div id="container_editor" >
                  <div id="editor">
                  <JSONInput
                        id          = 'editor'
                        placeholder = { formData }
                        locale      = { locale }
                        onChange = {this.onChange}
                    />
                  </div>
                  <div id="core_component">
                  <DynamicComponent formData={this.state.data} onChangeFunction={this.onDataChange}/> 
                  <DynamicComponentV2 formData={this.state.pages[0]}/>
                  </div>
                </div>
            </Section>
        </SectionsContainer>
      </div>
    )
  }
}


export default ParentComponent;