import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import '../components/Home/styles/HomeProducts.css'
import FilterCategory from '../components/FilterCategories/FilterCategory'
import FilterByPrice from '../components/Home/FilterByPrice'

const Home = () => {

   const { productsGlobal } = useSelector(state => state)

    //console.log(productsGlobal);

  const inputValue = useRef()
  
const [otro, setOtro] = useState('')
const [fromTo, setFromTo] = useState({
  from:0,
  to:Infinity
})
//console.log(fromTo);


  const handleChangeInput = () => {
    console.log(inputValue.current.value);
    setOtro(inputValue.current.value.toLowerCase().trim())
  }

  const productFilter = productsGlobal
  ?.filter(prod => prod.title.toLowerCase().includes(otro))
  .filter(prod => {
/*     const from = Number(fromTo.from)
    const to = Number(fromTo.to) */

    const from = +fromTo.from
    const to = +fromTo.to  
    const price = +prod.price

    if(from && to){
      //return price >= from && price <= to
      return from <= price && price <= to
    }

    if(from && !to){
      //return price >= from && price <= to
      return from <= price
    }

    if(!from && to){
      //return price >= from && price <= to
      return price <= to
    }

    if(!from && !to){
      //return price >= from && price <= to
      return true
    }

  })



  return (
    <main className='home'>

     <input className='home__input' ref={inputValue} type="text" onChange={handleChangeInput} placeholder='What are you looking for?' />
      
      <div className='home__container'>

        <div className='product-filter'>
          <FilterCategory />   
          <br /> 
          <FilterByPrice setFromTo={setFromTo} />
        </div>

        <div className='product-container'>
          {
            productFilter?.map(prod => (
              <CardProduct key={prod.id} product={prod} />
            ))
          }
        </div>

      </div>

    </main>
  )
}

export default Home