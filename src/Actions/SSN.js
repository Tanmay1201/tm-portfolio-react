import axios from 'axios'
import {SSN_DATA, FETCH_SSN_DATA, SSN_FORM_TYPE, SSN_FORM_EDIT_INDEX, FETCH_SSN_DATA_SUCCESS, FETCH_SSN_DATA_ERR, OPEN_SSN_FORM} from './allActions'

export const SSN_Data = data => {
    return {
        type: SSN_DATA,
        payload: data
    }
} 

export const SSN_FORM_OPEN = data => {
    return {
        type:OPEN_SSN_FORM,
        payload: data
    }
}

export const SSN_Form_Type = data => {
    return {
        type:SSN_FORM_TYPE,
        payload: data
    }
}

export const SSN_Form_Edit_Index = data => {
    return {
        type:SSN_FORM_EDIT_INDEX,
        payload: data
    }
}


export const Handle_Form = (value, type, index) => {
    return (dispatch) => {
            dispatch( SSN_FORM_OPEN(value))
            dispatch( SSN_Form_Type(type))
            dispatch( SSN_Form_Edit_Index(index))
    }
}

export const SSN_Fetch = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_SSN_DATA
        })
        return axios.get('http://localhost:5000/ssn')
        .then(res=> {
            dispatch({ 
                type: FETCH_SSN_DATA_SUCCESS, 
                payload:res.data
            })
        })
        .catch(err => {
            dispatch({ 
                type: FETCH_SSN_DATA_ERR, 
                payload: err 
            })
        })
    }

}