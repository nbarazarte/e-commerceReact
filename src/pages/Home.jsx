import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import '../components/Home/styles/HomeProducts.css'

const Home = () => {

   const { productsGlobal } = useSelector(state => state)

    //console.log(productsGlobal);

  return (
    <>
      <div className='product-container'>
          {
              productsGlobal?.map(prod => (
                  <CardProduct key={prod.id} product={prod} />
              ))
          }
      </div>
      <footer className='footer'>
          <div><i className='bx bx-copyright'></i>Academlo 2023</div>
          <div className='social'>
            <span className='social__info'><i className='bx bxl-twitter'></i></span>
            <span className='social__info'><i className='bx bxl-linkedin' ></i></span>
            <span className='social__info'><i className='bx bxl-youtube' ></i></span>
          </div>
      </footer>
    </>



  )
}

export default Home