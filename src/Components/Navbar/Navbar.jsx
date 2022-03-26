import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav_list'>
        
                <NavLink to={"/"}> Schedule </NavLink>
                <NavLink to={"/Category"}> Category </NavLink>

        </div>
    </div>
  )
}

export default Navbar