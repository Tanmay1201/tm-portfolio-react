import {NAV_OPEN} from './allActions'

export const openNav = data => {
    return {
        type: NAV_OPEN,
        payload: data
    }
}