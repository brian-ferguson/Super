import {
    SET_ACTIVE_SECTION,
    GET_INVENTORY,
    SET_INVENTORY
    } from '../actions/types';

const initialState = {
    section: '',
    inventory: []
}

export default function userReducer(state = initialState, action, payload){
    switch(action.type){
        case SET_ACTIVE_SECTION:
            return{
                ...state,
                section: action.payload
            }
        case GET_INVENTORY:
            return{
                ...state,
                inventory: action.payload
            }
        case SET_INVENTORY:
            return{
                ...state,
                inventory: action.payload
                
            }
        default:
            return state;
    }
}