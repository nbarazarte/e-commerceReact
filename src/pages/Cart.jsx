import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slices'
import ProductInCart from '../components/Cart/ProductInCart'

import '../pages/styles/cart.css'
import usePurchases from '../hooks/usePurchases'

const Cart = () => {

    const { cartGlobal } = useSelector(state => state)
    const dispatch = useDispatch()
    const {buyThisCart} = usePurchases()

    console.log(cartGlobal);


    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    }, [])
    
    //console.log(cartGlobal);

    const totalPriceCart = cartGlobal?.reduce( (acc,cv) => acc + cv.quantity * cv.product.price, 0)

    const handlePurchase = () => {
        buyThisCart()
    }


    console.log(totalPriceCart);
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
        <footer>
            <span>Total:</span>
            <h3>{totalPriceCart}</h3>
            <button onClick={handlePurchase} className='cart_btn'>Buy Now</button>
        </footer>
    </div>
  )
}

export default Cart