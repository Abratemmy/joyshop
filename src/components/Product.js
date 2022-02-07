import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { ProductConsumer } from './Context';
import {FaShoppingCart} from "react-icons/fa";

export class Product extends Component {
  render(props) {
    const{id, acf, title }=this.props.data
    const {closeNavCart, isInCart, addToCart} = this.props;
  
    return (
        <ProductConsumer>
            {value=>{
                return(
                  <div className="product">
                      <Link to={`/details/${id}`} onClick={closeNavCart}>
                          <div className="img-div">
                              <img src={acf.image.url}alt="" width="100%" />
                          </div>
                      </Link>

                      <div className="details">
                        <h3>{title.rendered}</h3>
                        <p>${acf.price}</p>

                        <div className="cartBtn">
                          <button onClick={addToCart} className={isInCart ? 'disabled' : ""}>
                            <FaShoppingCart />
                            {isInCart ? "Already in cart" : "Add to cart"}
                          </button>
                        </div>
                      </div>
                  </div>
                )
            }}
        </ProductConsumer>
      )
  }
}

export default Product;
