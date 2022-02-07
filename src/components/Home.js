import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ProductConsumer } from './Context';


function Home(props) {
  const [shop, setShop] = useState([]);

  useEffect(() =>{
      const fetchShop = async () =>{
          const res = await axios.get('https://wp.joyagunbiade.com/wp-json/wp/v2/shops?per_page=2');
          setShop(res.data);
      }
      fetchShop()
  }, []);

  const {closeNavCart, isInCart, addToCart} = props;
  return (
    <ProductConsumer>
      {value=>{
        return(
          <div>
              <div className="header">
                <div className="header-info">
                  <h1><span className="header-shoe">JoyAgunbiade</span> Shop </h1>
                  <p>Best Designers clothes for you | Books that change your life</p>
                </div>
              </div>

              <div className="products-home">
                  <div className="home-pics text-center">
                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641831769/Joyagunbiade.com/linkedin_tvwtf2.jpg"  alt="joy img" />
                    <h1>@shoppingwithjoy</h1>

                    <p>Here, we have for you quality customized clothes of all sizes, that gives you the alluring and outstanding look you 
                        desire. We also provide the most famous book from  reputable authors that can change your destiny for good.
                    </p> 

                    <div className="home-content">
                        <div className="home-products">
                            <div className="home-content-title ">Our Products </div>

                            <div className="home-data">
                              <div className="row justify-content-center">
                                {shop.map((shop, i)=>{
                                  return(
                                      <div className="col-12 col-md-6 col-lg-6 col-sm-6 mx-0 mb-1">
                                          <div className="home-shopdata">
                                              <div className="product" key={i}>
                                                <Link to={`/details/${shop.id}`} onClick={closeNavCart}>
                                                    <div className="img-div">
                                                        <img src={shop.acf.image.url}alt="" width="100%" />
                                                    </div>
                                                </Link>

                                                <div className="details">
                                                  <h3>{shop.title.rendered}</h3>
                                                  <p>${shop.acf.price}</p>

                                                  <div className="cartBtn">
                                                    <button onClick={addToCart} className={isInCart ? 'disabled' : ""}>
                                                      <Link to={`/details/${shop.id}`} className="pro-link" >Select Product
                                                      </Link>
                                                    </button>
                                                  </div>
                                                </div>

                                              </div>
                                          </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>

                              <div className="text-center" style={{marginBottom:"40px"}}>
                                <Link to="/products" className="homelink">View all products</Link>
                              </div>

                        </div>

                        <div className="home-link">
                            <div className="home-content-title">Our Links </div>
                            <div className="home-link-container"><a href="https://wa.me/+12899680162" target="_blank"
                              rel="noopener noreferrer">Chat with us</a>
                            </div>

                            <div className="home-link-container"><a href="tel:+12899680162" target="_blank"
                              rel="noopener noreferrer">Call us </a>
                            </div>

                            <div className="home-link-container"><a href="https://www.instagram.com/joy_ajay/" target="_blank"
                              rel="noopener noreferrer">Find us on Instagram </a>
                            </div>

                            <div className="home-link-container"><a href="https://joyagunbiade.com" target="_blank"
                              rel="noopener noreferrer">Go to our main Website</a>
                            </div>

                            <div className="home-link-container"><Link to="/products">View Our Products </Link>
                            </div>
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

export default Home;
