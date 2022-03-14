import React from 'react';
import { ProductConsumer } from './Context';
import {useParams, Link} from "react-router-dom";
import "./Details.css";
import {FaShoppingCart} from "react-icons/fa"

function Details(props) {
  const { id } = useParams();

  // note: instead of using this.match.params.id, i used useParams cos of the version of react that am using
  return(
    <ProductConsumer>
        {value=>{
          const {data,addToCart} = value;         
          console.log(id);

          let results= data.find(data=>data.id===parseInt(id));

          return(
            <div className="det" >
                <div className="inside-container">
                    <h2>Product details</h2>
                    <div className="det-center">
                        <div className="det-img">
                          <img src={results.acf.image.url} alt="img" />
                        </div>

                        <div className="det-info">
                          <h3>{results.title.rendered}</h3>
                          <p>{results.acf.details}</p>
                          <h4>price: <span>${results.acf.price}</span></h4>

                          <div className="but-options">
                            <Link to="/products">
                              <button className="back-products">Back to products</button>
                            </Link>
                              
                            {/* <button className="add-toCart" onClick={()=>addToCart(results.id)}>Add to Cart</button> */}
                            
                            <button onClick={()=>addToCart(results.id)} className={(results.acf.isincart)===true?'disabled':''}> 
                              <FaShoppingCart />{(results.acf.isincart)===true?"Already in cart":"Add to cart"} 
                            </button>

                          </div>
                        </div>
                    </div>
                </div>
            </div>
          )
         
        }}
        
    </ProductConsumer>
  )
}

export default Details;



