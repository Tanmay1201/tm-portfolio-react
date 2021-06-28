import {SSN_DATA, SSN_FORM_EDIT_INDEX, FETCH_SSN_DATA_SUCCESS, OPEN_SSN_FORM, SSN_FORM_TYPE} from '../Actions/allActions'

let initialState = {
    data: [],
    SSN_Form_Open: false,
    SSN_Form_Type: '',
    SSN_Index: -1
}

const SSN_Reducer = (state=initialState, action) => {
    switch(action.type)
    {
        case FETCH_SSN_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case OPEN_SSN_FORM:
            return {
                ...state,
                SSN_Form_Open: action.payload,
            }
        case SSN_FORM_TYPE:
            return {
                ...state,
                SSN_Form_Type: action.payload
            }
        case SSN_FORM_EDIT_INDEX:
            return {
                ...state,
                SSN_Index: action.payload
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