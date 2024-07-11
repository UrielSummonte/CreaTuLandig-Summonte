import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <div className='bg-stone-100 w-full h-[15vh] flex items-center justify-between px-2'>
      <div className='w-36 h-20'>
        <a href="../../../index.html">
          <img src={logo} alt="" className='w-full h-full' />
        </a>
      </div>
        <nav className='w-[70%]'>
          <ul className='flex items-center justify-center gap-12 text-xl font-semibold'>
            <li>
              <a href="" className='hover:bg-gray-300 py-2 px-5 rounded-lg'> Inicio </a>
            </li>
            <li>
              <a href="" className='hover:bg-gray-300 py-2 px-5 rounded-lg'> Productos </a>
            </li>
            <li>
              <a href="" className='hover:bg-gray-300 py-2 px-5 rounded-lg'> Mi Cuenta </a>
            </li>
            <li>
              <a href="" className='hover:bg-gray-300 py-2 px-5 rounded-lg'> Mi Compra </a>
            </li>
          </ul>
        </nav>
      <div className='w-[5%]'>
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar