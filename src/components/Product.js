import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { ProductConsumer } from './Context';
import {FaShoppingCart} from "react-icons/fa";

export class Product extends Component {
  render(props) {
    const{id, acf, title}=this.props.data
    const {closeNavCart, addToCart} = this.props;
  
    return (
      <ProductConsumer>
        {value=>{
            return(
              <div className="product">
                  <Link to={`/details/${id}`} onClick={closeNavCart} >
                      <div className="img-div">
                          <img src={acf.image.url} alt=""/>              
                      </div>
                  </Link>
              
                  <div className="details">
                  <h3>{title.rendered}</h3>
                  <p>${acf.price}</p>
              
                  <div className="cartBtn">
                    {/* <Link to={`/details/${id}`}>
                      <button>
                        Select Option
                      </button>
                    </Link> */}
                      <button onClick={addToCart} className={(acf.isincart)===true?'disabled':''}> 
                        <FaShoppingCart />{(acf.isincart)===true?"Already in cart":"Add to cart"} 
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
