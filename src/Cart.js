import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct';

function Cart() {

  const [{basket}] = useStateValue();
 
  return (
    <div>
      <h2> CART ITEMS </h2>
      {
        basket.map(item => (
            <CheckoutProduct 
                id  = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating= {item.rating}
            />
        ))
      }
    </div>
  )
}

export default Cart
