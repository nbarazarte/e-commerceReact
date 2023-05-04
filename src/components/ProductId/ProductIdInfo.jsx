import React, { useState } from 'react'

const ProductIdInfo = ({product}) => {

    //console.log(product);

    const [quantity, setQuantity] = useState(1)

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {

        if(quantity <= 0){
            setQuantity(0)
        }else{
            setQuantity(quantity - 1)
        }
    }

  return (
    <section>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <div>
                <span>Price</span>
                <span>{product?.price}</span>
            </div>
            <div>
                <span>Quantity</span>
                <div>
                    <button onClick={handleMinus}>-</button>
                    <div>{quantity}</div>
                    <button onClick={handlePlus}>+</button>
                </div>
                
            </div>
            <button>Add to Cart<i className='bx bx-cart'></i> </button>
        </footer>
    </section>
  )
}

export default ProductIdInfo