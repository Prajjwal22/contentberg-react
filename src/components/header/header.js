import React from 'react'
import Logo from '../../assets/logo.webp'
import './header.css'
import SearchBar from '../search/searchbar'

export default function Header() {
  return (
    <div className='mainHeader'>
      <div className='container'>
      <div className='headerWrap '>
        <div className='siteLogo'>
          <img src={Logo} alt="Site Logo" />
        </div>
        <div className='siteMenu'>
          <ul className='menuLinks'>
            <li>Home</li>
            <li>About</li>
            <li>Gadgets</li>
            <li>Learning</li>
            <li>Groceries</li>
          </ul>
        </div>
      </div>
      <SearchBar />
      </div>
    </div>
  )
}
