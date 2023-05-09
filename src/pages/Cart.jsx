import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slices'
import ProductInCart from '../components/Cart/ProductInCart'

const Cart = () => {

    const { cartGlobal } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(cartGlobal);


    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    }, [])
    
    console.log(cartGlobal);

  return (
    <div>
        <h2>Cart</h2>
        {
            cartGlobal?.map( prodCart => (
                <ProductInCart 
                    key={prodCart.id}
                    prodCart={prodCart}
                />
            ))
        }
    </div>
  )
}

export default Cart