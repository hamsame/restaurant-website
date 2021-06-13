import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  const showMenu = () => {
    document.querySelector('.nav').classList.toggle('show')
    document.querySelector('.nav-btn').classList.toggle('show')

    if (document.querySelector('.nav').classList.contains('show')) {
      document.querySelector('.hamburger').innerHTML = '&#10005;'
    } else {
      document.querySelector('.hamburger').innerHTML = '&#9776;'
    }
  }

  return (
    <nav>
      <div className='container'>
        <h1>
          <Link to='/'>Hill</Link>
        </h1>
        <div className='hamburger' onClick={() => showMenu()}>
          &#9776;
        </div>
        <ul className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <Link to='/reservation' className='nav-btn'>
          Make A Reservation
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
