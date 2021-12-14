import { useSelector, useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';

import { setInventory } from '../actions/userActions';

import store from '../store';

const Activity = ({title, loot}) => {

    const dispatch = useDispatch()

    const selectDrop = () => {
        let weightSum = loot.reduce((a,b) => a + (b['weight'] || 0), 0)
        let random = Math.floor(Math.random() * (weightSum - 0 + 1) + 0)
        let weight = 0
        for(let i=0; i<loot.length; i++){
            weight += loot[i].weight
            if(random <= weight){
                let randomAmount = Math.floor(Math.random() * (loot[i].maximum - loot[i].minimum + 1) + loot[i].minimum)
                let itemDrop = [{
                    "id": loot[i].id,
                    "quantity":randomAmount
                }]
                dispatch(setInventory(itemDrop))
                break
            }
        }

    }


    return <div>
        <h4>{title}</h4>
        <img src={"/images/activities/" + title + ".png"} alt="" style={{ height: 100, width: 100}} />
        <button onClick={selectDrop}>Default</button>

    </div>
}

export default Activity
