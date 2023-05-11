import { useNavigate } from "react-router-dom"
import './styles/CardProduct.css'
import useCrudCart from "../../hooks/useCrudCart"

const CardProduct = ({product}) => {
    const { addProductToCard } = useCrudCart()
    const navigate = useNavigate()

    const handleSelectProductId = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = (e) => {
        e.stopPropagation()
        const data = {
            quantity:1,
            productId:product.id
        }
        addProductToCard(data)
    }

   // console.log(product)

  return (
    
    <article className="product" onClick={handleSelectProductId}>

        <header className="product__header">
            <img className="product__img product__img-1" src={product.images[0].url} alt=""/>
            <img className="product__img product__img-2" src={product.images[1].url} alt=""/>
        </header>


        <section className="product__info">

            <div className="product__section">
                <h4 className="product__subtitle">{product.brand}</h4>
                <h3 className="product__title">{product.title}</h3>
            </div>

            <div className="product__btn-div">
                <div className="product__price">
                    <h4 className="product__label">Price: </h4>
                    <h3 className="product__price-value">${product.price}</h3>
                </div>
                <button onClick={handleBtnClick} className="product__btn">
                    <i className='bx bxs-cart-alt'></i>
                </button>
            </div>



        </section>




    </article>
  )
}

export default CardProduct