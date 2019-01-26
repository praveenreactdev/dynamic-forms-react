import fieldsReducer from './fieldsReducer';
import authenticationReducer from './authenticationReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'
const rootReducer = combineReducers({
    fields : fieldsReducer,
    auth : authenticationReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default rootReducer;