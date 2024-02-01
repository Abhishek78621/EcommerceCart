import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
//import cartreducer from '../Reducers/cartreducer';



const Header = () => {
  const cart=useSelector(state=>state.cart);
  return (
    <div className='header '>
        <div className='header-start'>
          <Link to="/home">
        <h3 className='header-left uppercase '>Smartwatch</h3>
        </Link>
        </div>
        <div className='header-mid'>
          <Link to="/homeproducts">
        <h3 className='header-left uppercase '>Phones</h3>
        </Link>
        </div>
        
        <div className='header-end'>
            <Link to="/checkout">
            <span >Cart <strong >{cart.cart.length}</strong></span>
            </Link>

        </div>
      
    </div>
  )
}

export default Header;
