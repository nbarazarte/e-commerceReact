import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import ProductId from './pages/ProductId'
import Header from './components/shared/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'

//import { useDispatch, useSelector } from 'react-redux'

function App() {

const dispatch = useDispatch()

//const { productsGlobal } = useSelector(state => state)

useEffect(() => {
  dispatch(getAllProductsThunk())
}, [])

  return (
 
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductId />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Routes>
        <footer className='footer__app'>
          <div><i className='bx bx-copyright'></i>Firulais Store 2023</div>
          <div className='social'>
            <span className='social__info'><i className='bx bxl-twitter'></i></span>
            <span className='social__info'><i className='bx bxl-linkedin' ></i></span>
            <span className='social__info'><i className='bx bxl-youtube' ></i></span>
          </div>
      </footer> 
      </div>

  
  )
}

export default App
