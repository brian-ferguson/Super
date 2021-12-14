import {
    GET_INVENTORY,
    SET_ACTIVE_SECTION,
    SET_INVENTORY
    } from './types';
import axios from 'axios'
import store from '../store';

//SET PHASE
export const setActiveSection = (section) => (dispatch) => {
    dispatch({
        type: SET_ACTIVE_SECTION,
        payload: section
    })
}

//GET MARKETING PROFILE
export const getInventory = () => (dispatch) => {

    axios.get('api/users/inventory/' + store.getState().auth.id)
    .then(res => dispatch({
        type: GET_INVENTORY,
        payload: res.data.inventory
    }))
    .catch(err => console.log(err))

}

export const setInventory = (data) => (dispatch) => {

    console.log("data: ", data)

    
    axios.post('/api/users/setinventory/' + store.getState().auth.id, {data: data})
        .then(() => dispatch({
            type: SET_INVENTORY,
            payload: data
        }))
        .catch(err => console.error(err))
        
}
