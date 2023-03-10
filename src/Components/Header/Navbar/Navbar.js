import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><div className="navbar bg-base-100">
    <div className="flex-1">
      <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Sign In</Link></li>
      </ul>
    </div>
  </div></div>
  )
}

export default Navbar