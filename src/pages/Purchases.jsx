import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchases from '../components/Purchases/ProductPurchases'

const Purchases = () => {

    const { purchases, getAllProductPurchased} = usePurchases()

    useEffect(() => {
        getAllProductPurchased()
    }, [])

   // console.log(purchases);

  return (
    <div>
        <h2>Purchases</h2>
        <div>
            {
                purchases?.map( prodPurchase => (

                    <ProductPurchases 
                        key={prodPurchase.id}
                        prodPurchase={prodPurchase}
                    />

                ))
            }
        </div>
    </div>
  )
}

export default Purchases