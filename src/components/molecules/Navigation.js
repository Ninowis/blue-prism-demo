import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><NavLink exact to='/' activeClassName="selected">Home</NavLink></li>
      <li><NavLink to='/about' activeClassName="selected">About</NavLink></li>
      <li><NavLink to='/demo' activeClassName="selected">Demo</NavLink></li>
    </ul>
  </nav>
)

export default Navigation