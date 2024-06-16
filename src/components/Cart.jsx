import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const cartSlice = useSelector((state) => state.cart)
  console.log(cartSlice)
  return (
    <div>
      <h1>Cart</h1>
    <h2>total products : {cartSlice.noOfProducts}</h2>
      <div>
        {cartSlice.arrOfProducts.map((item ,i) => (
          <div key={i}><br />
          <h1>{item.name}</h1>
            key:{item.name}
          price : {item.price}
          <h2> name  : {item.name}</h2>
          </div>
           
        ))}
        total price : {cartSlice.TotalPrice}
      </div>
    </div>
  )
}

export default Cart
