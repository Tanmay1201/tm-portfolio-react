import {NAV_OPEN} from '../Actions/allActions'

let initialState = {
    navOpen: false
}

const CommonReducer = (state=initialState, action) => {
    switch (action.type)
    {
        case NAV_OPEN:
            return {
                navOpen: action.payload
            }
        default:
            return state;
    }

}

export {CommonReducer}