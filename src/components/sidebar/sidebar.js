import React from 'react'
import { NavLink } from 'react-router-dom';
import "./sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        
        <NavLink to="/" className="sidebar-nav">
            <div className='sidebar-link'>
                Home
            </div>
        </NavLink>

        <NavLink to="/booksearch" className="sidebar-nav">
            <div className='sidebar-link'>
                Search
            </div>
        </NavLink>

        <NavLink to="/popular_products" className="sidebar-nav">
            <div className='sidebar-link'>
                Popular Products
            </div>
        </NavLink>

        <NavLink to="/product_categories" className="sidebar-nav">
            <div className='sidebar-link'>
                Products Categories
            </div>
        </NavLink>
     
      
    </div>
  )
}

export default Sidebar