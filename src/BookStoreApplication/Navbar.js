import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
const navLinkStyle=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        textDecoration:isActive?'none':'underline'
    }
}
export const Navbar = () => {
  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkStyle} to='/Signup'>SignUp</NavLink>
    </nav>
  )
}