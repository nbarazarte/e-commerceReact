import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductInCart = ({prodCart}) => {

    //console.log(prodCart);


    const {deleteProductFromCart} = useCrudCart()

    const handleDeleteCart = () =>{
        deleteProductFromCart(prodCart.id)
    }

console.log(prodCart);
  return (
    <article>
        <header>
            <img  src={prodCart.product.images[0].url}/>
        </header>

        <section>
            <h3>{prodCart.product.title}</h3>
        </section>

        <button onClick={handleDeleteCart}>
            <i className='bx bx-trash'></i>
        </button>
        <footer>
            <span>
                {prodCart.product.quantity}
            </span>
            <div>
                <span>
                    SubTotal:
                </span>
                <span>{prodCart.product.price * prodCart.quantity}</span>
            </div>
        </footer>
    </article>
  )
}

export default ProductInCart