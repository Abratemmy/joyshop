import React from 'react';
import {ProductConsumer} from "./Context";
import {BsTrashFill} from "react-icons/bs";
import {Link } from "react-router-dom"


function Cart(props) {
    const {cartOpen, closeNavCart, handleCartNav, shipping }= props.valueProps;

  return (
    <ProductConsumer>
        {value=>{
            const {cart, total, deleteItem, increaseItem, decreaseItem} = value;
            return(
                <ul className={cartOpen ? "newCartNav cartNav cartItem": "cartNav cartItem"}>

                    {cart.length===0 ? 
                    
                        <div>
                            <span className="inside-btn" onClick={handleCartNav}>X</span>
                            <div className="empty">
                                cart is currently empty
                            </div>
                        </div> :

                        <div className="cartItem">
                            <span className="inside-btn" onClick={handleCartNav}>X</span>

                            {cart.map((product, i)=>{
                                return(
                                    <div className="cart-center" key={i}>
                                        
                                        <div className="img-cart">
                                            <img src={product.acf.image.url} alt="img" />
                                        </div>

                                        <div className="item-cart">
                                            <p>{product.title.rendered}</p>
                                        </div>

                                        <div className="inc-dec-cart">
                                            <button onClick={()=>decreaseItem(product.id)}> - </button>
                                                {product.acf.count}
                                            <button onClick={()=>increaseItem(product.id)}>+</button>
                                        </div>

                                        <div className="price-cart">
                                            <p>$ {product.acf.price * product.acf.count}</p>
                                        </div>

                                        <div className="del-item" onClick={()=>deleteItem(product.id)}>
                                            <BsTrashFill className="delete-item" />
                                        </div>

                                    </div>
                                )
                            })}
                            {/* total */}
                            <div className="extra -info">
                                <div className="extra-text"><span>Amount: </span>${total}</div>

                                <div className="shipping">
                                    <div className="extra-text"><span>Shipping:</span>{total > 90? "free" : `+ ${shipping}`} </div>
                                </div>

                                <div className='extra-text'><span> Total Amount :</span> ${total> 90 ? total : total + shipping}</div>

                                <div className="payment" onClick={closeNavCart}>
                                    <Link to="/payment" >payment</Link>
                                </div>
                            </div>
                        </div>


                    }
                    
                </ul>
            )
        }}
      
    </ProductConsumer>
  )
}

export default Cart;
