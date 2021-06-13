import { combineReducers } from 'redux'
import {SSN_Reducer} from './SSN_Reducer'

const rootReducer = combineReducers({
    SSN_Data: SSN_Reducer
})

export default rootReducer