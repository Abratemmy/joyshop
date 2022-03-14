import React, {useState} from 'react';
import Sidebar from '../../sidebar/sidebar';
import {BiSearch} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import "./booksearch.css";
import { ProductConsumer } from '../../Context';
import { Link } from 'react-router-dom';

function BookSearch() {
    const [filteredData, setfilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");
    
  return (
        <ProductConsumer>
          {function(value){
            const{bookdata, addToCart} = value;

            const handleFilter = (event) =>{
                const searchWord= event.target.value;
                setwordEntered(searchWord);
                const newFilter = bookdata.filter((value) =>{
                    return(value.title.rendered.toLowerCase().includes(searchWord.toLowerCase()) || 
                    value.acf.category.toLowerCase().includes(searchWord.toLowerCase())
                    );
                });

                if(searchWord === ""){
                    setfilteredData([])
                }
                // else if(searchWord !== setfilteredData(newFilter)){
                //     return(<p>There is no match for your search</p>)
                // }
                else{
                    setfilteredData(newFilter);
                }
                
            }

            const clearInput = () =>{
                setfilteredData([]);
                setwordEntered("");
            }
             
            return(                  
                <div className='container'>

                <div className='search'>
                    <div className='singlebook-header title-banner' style={{textAlign:"center"}}>Search</div>

                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12'></div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='searchbar'>
                                <div className='searchinputs'>
                                    <input type="text" placeholder='Search book'value={wordEntered} onChange={handleFilter}/>
                                    <div className='searchicon'>
                                        {filteredData.length === 0 ? <BiSearch className='search-icon' /> : 
                                            <MdClose className='search-icon' id="clearBtn" onClick={clearInput} />
                                        }
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12'></div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <div className='single-sidebar'>
                                <Sidebar />
                            </div>
                        </div>

                        <div className='col-lg-9 col-md-9 col-sm-12'>
                            {filteredData.length !=0 && (
                                <div className='dataresult'>
                                    {filteredData.map(book =>{
                                        return (
                                            <div className='row search-row'>
                                                <div className='col-lg-5 col-md-5 col-sm-12'>
                                                    <div className='searchimg'>
                                                        <Link to={`/books/${book.id}`}>
                                                            <img src={book.acf.image} alt="searchimage" width="100%" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='col-lg-7 col-md-7 col-sm-12'>
                                                    <div className='search-content'>
                                                        <Link to={`/books/${book.id}`} className='search-link'><div className='search-title'>{book.title.rendered}</div></Link>
                                                        <div className="but-options">
                                                            <Link to={`/books/${book.id}`}>
                                                                <button className="back-products search-btn" >Learn More</button>
                                                            </Link>
                                                        </div>
                                                        <div className='search-price'>${book.acf.price}</div>
                                                        

                                                        <div className="but-options">
                                                            <button onClick={()=>addToCart(book.id)} className={(book.acf.isincart)===true?'disabled':''}> 
                                                                <FaShoppingCart />{(book.acf.isincart)===true?"Already in cart":"Add to cart"} 
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='search-line' />
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>
                

                </div>

            )
            }}
        </ProductConsumer>
    )
}

export default BookSearch