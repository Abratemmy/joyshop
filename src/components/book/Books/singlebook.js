import React from 'react';
import { ProductConsumer } from '../../Context';
import {useParams, Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import "./singlebook.css";
import Singlepopularbook from './singlepopularbook';
import Sidebar from '../../sidebar/sidebar';


function Singlebook(props) {
  const { id } = useParams();

  // note: instead of using this.match.params.id, i used useParams cos of the version of react that am using
  return(
    <ProductConsumer>
        {value=>{
          const {bookdata,addToCart} = value;         
          console.log(id);

          let results= bookdata.find(bookdata=>bookdata.id===parseInt(id));

          return(
            <div className="Single-products" >
              <div className='container'>
                  <div className='singlebook-header'>{results.title.rendered}</div>
                  <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='single-sidebar'>
                          <Sidebar />
                      </div>
                    </div>

                    <div className='col-lg-9 col-md-9 col-sm-12'>
                        <div className="inside-container">
                            <h2>Book details</h2>
                            <div className="det-center">
                                <div className="det-img">
                                  <img src={results.acf.image} alt="img" />
                                </div>

                                <div className="det-info">
                                  <h3>{results.title.rendered}</h3>
                                  <h4>price: <span>${results.acf.price}</span></h4>

                                  <div className="but-options">
                                    <Link to="/all_books">
                                      <button className="back-products">Back to Books</button>
                                    </Link>
                                      
                                    {/* <button className="add-toCart" onClick={()=>addToCart(results.id)}>Add to Cart</button> */}
                                    
                                    <button onClick={()=>addToCart(results.id)} className={(results.acf.isincart)===true?'disabled':''}> 
                                      <FaShoppingCart />{(results.acf.isincart)===true?"Already in cart":"Add to cart"} 
                                    </button>

                                  </div>
                                </div>

                                <div className='book-desc'>
                                    <h4>About this Book</h4>
                                    <p>{results.acf.itemdescription}</p>
                                    <p>{results.acf.itemdescription2}</p>
                                    <p>{results.acf.itemdescription3}</p>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className='single-popularproduct'>
                  <div className='container'>
                    <h2 style={{textAlign:"center"}}>Popular Products</h2>
                      <div className='single-popularbook'>
                        <Singlepopularbook />
                      </div>
                  </div>
                </div>
            </div>
          )
         
        }}
        
    </ProductConsumer>
  )
}

export default Singlebook;



