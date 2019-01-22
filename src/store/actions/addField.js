export const addField = (fieldData)=>{
    return (dispatch,getState)=>{
        dispatch({type:'ADD_FIELD',fieldData})
    }
}