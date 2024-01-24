

import React from 'react';
import { useSelector } from 'react-redux';
import Total from './Total';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../Reducers/cartaction';
import "./Checkout.css";
import {removeall} from '../Reducers/cartaction';

const Checkout = () => {
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  return (
    <div className='checkout'>
    <div className='checkout-item'>
      {cart.cart.map(item=>{
        return(
          <div  className="product" key={item.id}>
            <img className='' src={item.image} alt=''></img>
            <div className='description'>
              
              <p>{item.title}</p>
              <h3>Price: {item.price}</h3>
              <button onClick={()=>dispatch(removefromcart(item.id))}>Remove</button>


            </div>

            </div>
        )
      })}

    </div>
    <div className='removeall'>
      <button onClick={()=>dispatch(removeall('ALL'))}>Remove All</button>

    </div>
    <div className='total'>
     <h1><Total/></h1>
    </div>
    </div>
  )
}

export default Checkout;
