import React, { Component } from 'react'
import {SectionsContainer, Section} from 'react-fullpage';
import DynamicComponent from './DynamicComponent';
import uuid from 'uuid';
const formData = [
    {
      id: uuid(),
      type: 'inputfield',
      props: {
        id: 'firstName',
        floatingLabelText: 'First Name',
        hintText: 'Name is required'
      }
    },
    {
        id: uuid(),
        type: 'inputfield',
        props: {
          id: 'LastName',
          floatingLabelText: 'Last Name',
          hintText: 'Name is required'
        }
      },
      {
        id: uuid(),
        type: 'inputfield',
        props: {
          id: 'Email',
          floatingLabelText: 'Email',
          hintText: 'Name is required'
        }
      }

    
  ];

class ParentComponent extends Component {

  render() {
    return (
      <div>
        <SectionsContainer>
            <Section>
                <DynamicComponent formData={formData} />
            </Section>
        </SectionsContainer>
      </div>
    )
  }
}
export default ParentComponent;