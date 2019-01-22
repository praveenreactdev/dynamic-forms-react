import uuid from 'uuid'
const initState = {
    inputArray : [
        {
            name : 'First Name',
            value: '',
            id : uuid(),
            placeholder : 'First Name',
            type: 'text'
        },{
            name : 'Last Name',
            value: '',
            id : uuid(),
            placeholder : 'Last Name',
            type:'text'
        }
    ]
  }
  
  const fieldsReducer = (state = initState, action) => {
    switch(action.type){
      case 'ADD_FIELD':
        const {fieldData} = action;
        const newState = {...state};
        newState.inputArray.push(fieldData)
        return newState;
      default:
        return state
    }
  };
  
  export default fieldsReducer;