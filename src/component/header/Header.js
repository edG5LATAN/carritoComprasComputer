import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
       <img className='header-img' src="./img/logoPc.jpg" alt=""/>
      </Link>
      <h1 className='header-titulo'>Proyecto de carrito</h1>
    </div>
  )
}

export default Header
