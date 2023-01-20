import React from 'react'
import { Pizza } from '../types';
import { useStateDispatch } from './AppState';

interface Props {
    pizza:Pizza
}

const SpecialOffer:React.FC<Props> = ({pizza}) => {
    const dispatch = useStateDispatch()

    const handleOnClick=()=>{
        dispatch({
         type:"ADD_TO_CART",
         payload:{
           item:{id:pizza.id,name:pizza.name,price:10}
         }
        })
       } 
  return (
    <div>{pizza.name}<button onClick={handleOnClick}>Add to Cart</button></div>

  )
}

export default SpecialOffer