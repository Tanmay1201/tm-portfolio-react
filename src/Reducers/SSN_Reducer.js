import { FormatColorResetTwoTone } from '@material-ui/icons';
import {SSN_DATA, OPEN_SSN_FORM} from '../Actions/allActions'

let initialState = {
    data: [],
    SSN_Form_Open: false
    
}

const SSN_Reducer = (state=initialState, action) => {
    switch(action.type)
    {
        case OPEN_SSN_FORM:
            return {
                ...state,
                SSN_Form_Open: action.payload
            }
        case SSN_DATA:
            return {
                ...state,
                data: state.data.concat(action.payload) 
            };
            default:
              return state;
    }
}

export  {SSN_Reducer};