import React from 'react'
import { removeItems } from '../redux store/slice';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function Cart() {
  const dispatch = useDispatch()
  function handleRemove(){
    // console.log(item.id)
    dispatch(removeItems(item.id))
  }
  const cartSlice = useSelector((state) => state.cart)
  console.log(cartSlice)
  return (
    <div>
      <h1>Cart</h1>
    <h2>total products : {cartSlice.noOfProducts}</h2>
      <div>
        {cartSlice.arrOfProducts.map((item ,i) => (
          <div key={i}>
          <h1>{item.name}</h1>
          
        { Boolean(item.key) && (<p> key:{item.key}  <br /> </p>)}
           
       {  Boolean(item.price ) &&  <p> price : {item.price} 
       &nbsp; <button onClick={handleRemove}>Remove</button></p>}
          </div>
           
        ))}
        total price : {Math.floor(cartSlice.TotalPrice)} 
      </div>
    </div>
  )
}

export default Cart
