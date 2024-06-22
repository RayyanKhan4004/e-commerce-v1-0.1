import React from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const header = function(){
  
  const goToCart =useNavigate();
  function goToCartFx(){
    goToCart("/cart")
  }
  return (
    <>
    <div className='container-nav'>
      <h1 className='h1-nav'>  <button> <NavLink to="/"  activeClassName={"active-d"} end={true} > Home </NavLink></button></h1>
      <h1 className='h1-nav'><button> <NavLink to='/cart' > Cart </NavLink></button></h1>
      <div className='container-nav' >

     {/* <button className='search' > Search</button>     */}
     </div>
      <div className='login-div'> <button className='login-btn' > 
      <NavLink activeClassName={`active-d`} to="/login">Login</NavLink></button></div>
        <div className='cart-nav'>
          <span>
            <button onClick={goToCartFx} className='cart-nav' >
              {/* npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome */}
            <FontAwesomeIcon icon={faCartShopping}  />   
            {/* bounce */}
            </button></span>
            
     </div>
        </div> 
    </>
  )
}
export default header