import React from 'react';
import "./products.css";
import { useDispatch } from 'react-redux';
import { addtocart } from '../Reducers/cartaction';


const Products = ({id,title,image,price}) => {
const dispatch=useDispatch();
  return (
    <div className='main-image'>
      <div className='image'><img src={image} alt=''></img></div>
     <div className='title'>
      <h1>{title}</h1>

     </div>
      <div className='price'>
      <p>${price}</p>

      </div>
      <div className='btn'>
      <button onClick={()=>dispatch(addtocart(id,title,image,price))}>Add to cart</button>

      </div>
      


    </div>
  )
}

export default Products
