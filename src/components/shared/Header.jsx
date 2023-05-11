import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Link to='/'>e-commerce</Link>
      </h1>
      <nav>
        <ul className='header__options'>
          <li><Link to='/login'><i className='bx bx-user'></i></Link></li>
          {/* <li><Link to='/register'>register</Link></li> */}
          <li><Link to='/purchases'><i className='bx bx-store'></i></Link></li>
          <li><Link to='/cart'><i className='bx bx-cart'></i></Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header