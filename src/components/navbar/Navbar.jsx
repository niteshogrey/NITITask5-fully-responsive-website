import React from 'react'
import '../navbar/navbar.css'
const Navbar = () => {

  

  return (
    <div className='header-2'>
    <nav className='navbar'>
      <a href="/">Home</a>
      <a href="/featured">Featured</a>
      <a href="#arrivals">Arrivals</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact</a>

    </nav>
    </div>
  )
}

export default Navbar