import React from 'react';
import { useSelector } from 'react-redux';
import "./Total.css";
import { getTotal } from '../Reducers/cartreducer';



function Total(){
 
    const cart=useSelector(state=>state.cart)
  return (
    <div className='main'>
      <div>
        <h1 className="text-center text-3xl font-bold text-blue-500">Total : {cart.cart.length } items : = {getTotal(cart.cart)}</h1>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default Total;
