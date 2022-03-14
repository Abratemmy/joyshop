import React, { Component } from 'react'
import { ProductConsumer } from '../../Context';
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

export class Allbook extends Component {
  render(props) {
    const{id, acf, title}=this.props.bookdata
    const {closeNavCart, addToCart} = this.props;

    return (
        <ProductConsumer>
            {value=>{
            return(
              <div className="product">
                  <Link to={`/books/${id}`} onClick={closeNavCart} >
                      <div className="img-div">
                          <img src={acf.image} alt=""/>              
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

export default Allbook