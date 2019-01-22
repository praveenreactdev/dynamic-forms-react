import fieldsReducer from './fieldsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    fields : fieldsReducer
})

export default rootReducer;