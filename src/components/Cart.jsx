import React from 'react'
import { removeItems } from '../redux store/slice';
import './cart.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function Cart() {
  const dispatch = useDispatch()
  function handleRemove(item , i){
    // console.log(item.key)
    dispatch(removeItems({key : item.key,ind : i , price : item.price}))
  }
  const cartSlice = useSelector((state) => state.cart)
  // console.log(cartSlice)
  return (
    <div className='cart-all' >
      <h1>Cart</h1>
    <h2>Total products : {cartSlice.noOfProducts}</h2>  <h2> Total price : {Math.trunc(cartSlice.TotalPrice)}  </h2>
      <div>
        {cartSlice.arrOfProducts.map((item ,i) => (
          <div key={i}>
          <h1>{item.name}</h1>
          
        { Boolean(item.key) && (<p> key:{item.key}  <br /> </p>)}
           
       {  Boolean(item.price ) &&  <p> price : {item.price} 
       &nbsp; <button onClick={()=>handleRemove(item , i )}>Remove</button></p>}
          </div>
           
        ))}
        <h2><button>Submit ➡️</button></h2>
      </div>
    </div>
  )
}

export default Cart
