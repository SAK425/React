import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
const Two = () => {
    const [product,setproducts] = useState('')
    //const state =  useSelector(state => state.products)
    const dispatch =  useDispatch()
    const handleSubmit = ()=>{
        const action = {
            type:"ADD_PRODUCT",
            payload:product
        }
        dispatch(action)
    }
    return (
        <div>
        <input onChange={(e)=>{setproducts(e.target.value)}} type="text"/>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Two
