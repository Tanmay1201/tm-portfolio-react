import { combineReducers } from 'redux'
import {SSN_Form} from './SSN_FormReducer'

const rootReducer = combineReducers({
    SSN_Form: SSN_Form
})

export default rootReducer