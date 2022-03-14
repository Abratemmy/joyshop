import React from 'react';
import {ProductConsumer} from './Context';
import Cart from './Cart';
import {FaShoppingCart} from "react-icons/fa";
import {MdMenu} from "react-icons/md";
import {Link} from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
      <ProductConsumer>
          {(value) =>{
              const  { cart,  handleNav,handleCartNav, navOpen, closeNavCart}  = value
                return(
                    <div className="container1 sticky">
                        <nav className="sticky">
                            <div className="logo-btn">
                                <Link to="/" onClick={closeNavCart}><img src="https://res.cloudinary.com/hayteetech/image/upload/v1641830186/Joyagunbiade.com/logo_j1zn9q.png" alt="Joy AgunbiadeLogo" /> </Link>
                            
                                <div className="cart hide" onClick={handleCartNav}>
                                    <FaShoppingCart /><span>0</span>
                                </div>

                                <div className="btn" onClick={ handleNav}>
                                    <MdMenu />
                                </div>

                            </div>
                            <div className="dra">
                                <div className="drawers">
                                    <ul className={navOpen ? "newLinks links" :"links"} onClick={closeNavCart}>
                                        <li><a href="https://joyagunbiade.com" target="_blank" rel="noreferrer">Joy Agunbiade</a></li>
                                        {/* <li><Link to="/products">Products</Link></li> */}
                                        <li><Link to="/free_ebook">Free e-Book</Link></li>
                                        {/* <li><Link to="/products">Products</Link></li>
                                        <li><Link to="/products">Products</Link></li> */}
                                    </ul>

                                    <Cart valueProps={value} />
                                </div>
                                <span className="carta" onClick={handleCartNav}>
                                    <FaShoppingCart /><span>{cart.length}</span></span>
                            </div>
                      </nav>
                      
                  </div>
              )
          }}
      </ProductConsumer>
  )
  
}

export default Navbar;
