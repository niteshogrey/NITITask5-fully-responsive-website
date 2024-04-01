import React, { useState } from 'react';
import '../header/header.css';
import { FaBook } from "react-icons/fa6";
import { FaUser, FaHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Header() {

  const[searchOpen, setSearchOpen] = useState(false)

  return (
    <div className='header'>
        <div className="header-1">
            <a href="/" className='logo'>< FaBook/> bookly</a>
            <form action="" className={searchOpen ?"Open": ""}>
                <input type="search" name='' placeholder='search here...' id="search-box" />
                <label htmlFor="search-box"><FaSearch /></label>
            </form>
            <div className="icons">
                <div id="search-btn" onClick={()=> {setSearchOpen(!searchOpen)}}><FaSearch /></div>
                <a href="/"><FaHeart /></a>
                <a href="/"><FaCartShopping /></a>
                <a href="/login" id="login -btn"><FaUser /></a>
            </div>
        </div>
    </div>
  )
}

export default Header