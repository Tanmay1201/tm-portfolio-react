import axios from 'axios'
import {SSN_DATA, FETCH_SSN_DATA, FETCH_SSN_DATA_SUCCESS, FETCH_SSN_DATA_ERR, OPEN_SSN_FORM} from './allActions'

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


export const SSN_Fetch = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_SSN_DATA
        })
        return axios.get('http://localhost:5000/ssn')
        .then(res=> {
            dispatch({ 
                type: FETCH_SSN_DATA_SUCCESS, res 
            })
        })
        .catch(err => {
            dispatch({ 
                type: FETCH_SSN_DATA_ERR, err 
            })
        })
    }

}