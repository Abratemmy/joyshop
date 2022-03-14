import React from 'react'
import { ProductConsumer } from '../../Context'
import Sidebar from '../../sidebar/sidebar';
import "./popularbook.css";

function Popularbook() {
  return (
    <ProductConsumer>
        
        {function(value){
            const{bookdata, addToCart} = value;

            return(
                <div className='container'>
                    <div className='singlebook-header title-banner' style={{textAlign:"center"}}>Popular Book</div>

                    <div className='popularbook'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-12'>
                                <div className='single-sidebar'>
                                    <Sidebar />
                                </div>
                            </div>

                            <div className='col-lg-9 col-md-9 col-sm-12'>
                                <div className='row popul'>
                                    {bookdata.map((popularbook, i)=>{
                                        return(
                                            <div className='col-lg-4 col-md-4 col-sm-12 mb-4' key={i}>
                                               
                                                {(popularbook.acf.popularitem) === true ? (
                                                    <div className='card text-center p-4 ' >
                                                        <img src={popularbook.acf.image} className="card-img-top" alt={popularbook.acf.title}  />
                                    
                                                        <div className='card-body'>
                                                        <h4 className='card-title'>{popularbook.title.rendered}</h4>
                                                        <p>${popularbook.acf.price}</p>
                                                        </div>
                                                    </div>

                                                ) : null}
                                            </div>
                                        )
                                    })}
                                    
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

export default Popularbook