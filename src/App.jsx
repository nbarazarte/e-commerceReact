import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import ProductId from './pages/ProductId'
import Header from './components/shared/Header'


//import { useDispatch, useSelector } from 'react-redux'

function App() {

const dispatch = useDispatch()

//const { productsGlobal } = useSelector(state => state)

useEffect(() => {
  dispatch(getAllProductsThunk())
}, [])


//console.log(productsGlobal);


  return (
    <>
      <div className='app'>
        
        <Header />
        <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductId />} />
        </Routes>
      </div>

    </>
  )
}

export default App
