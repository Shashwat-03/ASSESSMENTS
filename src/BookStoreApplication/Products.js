import React from 'react'
import {NavLink} from "react-router-dom"
const navLinkStyle=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        textDecoration:isActive?'none':'underline'
    }
}
export const Products = () => {
  return (
    <>
    <div>
        <input type='search' placeholder="Search Books"></input>
    </div>
    <nav classNmae='primary-nav'>
     <NavLink classNmae='primary-nav' style={navLinkStyle} to='/author'>Author</NavLink>
     <NavLink classNmae='primary-nav' style={navLinkStyle} to='/price'>Price</NavLink>
     <NavLink classNmae='primary-nav' style={navLinkStyle} to='/rating'>Rating</NavLink>
    </nav>
    </>
  )
}