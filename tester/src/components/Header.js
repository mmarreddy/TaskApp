import React from 'react'
import "../index"

const Header = () => {
  return (
    <div>
    <nav className='navbar'>
      <h2>Task Manager</h2>
      <ul>
        <li className='nav-item'><a href="">Home </a></li>
        <li className='nav-item'><a href="">About </a></li>
        <li className='nav-item'><a href="">Contact </a></li>
        <li className='nav-item'><a href="">Learn More </a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Header;
