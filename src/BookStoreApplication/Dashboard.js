import React from 'react'
import { useParams, Link } from 'react-router-dom'
export const Dashboard = () => {
    const {users}=useParams()
  return (
    <div>
        <h1>Welcome to the {users} profile</h1>
        <h1>Delivery Location</h1>
        <h2>Wishlist</h2>
        <h3>Recently Purchased</h3>
        <Link to='products'>Products</Link>
    </div>
  )
}