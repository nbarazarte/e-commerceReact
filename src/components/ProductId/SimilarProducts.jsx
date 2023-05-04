import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import CardProduct from '../Home/CardProduct';

const SimilarProducts = ({product}) => {

//console.log(product);  

const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`

const [filterProducts, getProductByCategory] = useFetch(url)
useEffect(() => {
    if(product){
        getProductByCategory()
        
    }
    
}, [product])

console.log(filterProducts);
    


  return (
    <section>
        <h2>Discover Similar products</h2>
        <div>
            {
                filterProducts?.filter(prod => prod.id !== product.id ).map(prod => {
                    return(
                        <CardProduct 
                            key={prod.id}
                            product={prod}
                        />
                    )
                })
            }
        </div>
    </section>
  )
}

export default SimilarProducts