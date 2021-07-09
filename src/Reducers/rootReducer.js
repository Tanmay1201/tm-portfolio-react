import { combineReducers } from 'redux'
import {SSN_Reducer} from './SSN_Reducer'
import {CommonReducer} from './CommonReducer'
const rootReducer = combineReducers({
    SSN_Data: SSN_Reducer,
    CommonReducer: CommonReducer
})

export default rootReducer