import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export const Signin = () => {
  return (
    <div>
        <h1>LOGIN SUCCESSFUL!</h1>
        <Link to='dashboard'>Dashboard</Link>
        <Outlet/>
    </div>
  )
}