import {SSN_DATA} from '../Actions/allActions'

let initialState = {
    data: []
    
}

const SSN_Form = (state=initialState, action) => {
    switch(action.type)
    {
        case SSN_DATA:
            return {
                ...state,
                data: state.data.concat(action.payload) 
            };
            default:
              return state;
    }
}

export  {SSN_Form};