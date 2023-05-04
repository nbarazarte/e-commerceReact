import React from 'react'

const SliderImg = ({product}) => {
    //console.log(product);
  return (
    <div>
        <img src={product?.images[0].url} />
    </div>
  )
}

export default SliderImg